"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface DottedGlowBackgroundProps {
    className?: string;
    opacity?: number;
    gap?: number;
    radius?: number;
    colorLightVar?: string;
    glowColorLightVar?: string;
    colorDarkVar?: string;
    glowColorDarkVar?: string;
    backgroundOpacity?: number;
    speedMin?: number;
    speedMax?: number;
    speedScale?: number;
}

export function DottedGlowBackground({
    className,
    opacity = 0.5,
    gap = 10,
    radius = 1.5,
    backgroundOpacity = 0.5,
    speedMin = 0.2,
    speedMax = 1.2,
    speedScale = 1,
}: DottedGlowBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        // Google Colors
        const GOOGLE_COLORS = [
            'rgba(66, 133, 244, 0.4)', // Blue
            'rgba(234, 67, 53, 0.5)',  // Red
            'rgba(251, 188, 4, 0.5)',  // Yellow
            'rgba(52, 168, 83, 0.5)'   // Green
        ];

        let dots: Dot[] = [];

        class Dot {
            x: number;
            y: number;
            glowIntensity: number;
            glowDirection: number;
            speed: number;
            baseColor: string;
            glowColor: string;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.glowIntensity = Math.random();
                this.glowDirection = Math.random() > 0.5 ? 1 : -1;
                this.speed = (Math.random() * (speedMax - speedMin) + speedMin) * speedScale;

                // Randomly select one of the Google colors
                const colorIndex = Math.floor(Math.random() * GOOGLE_COLORS.length);
                this.baseColor = GOOGLE_COLORS[colorIndex];

                // Create a slightly more opaque version for the glow
                this.glowColor = GOOGLE_COLORS[colorIndex].replace('0.4)', '0.6)').replace('0.5)', '0.7)');

                // Add some chaotic movement offset
                this.offsetX = Math.random() * Math.PI * 2;
                this.offsetY = Math.random() * Math.PI * 2;
            }

            offsetX: number;
            offsetY: number;

            update() {
                this.glowIntensity += (this.speed * 0.01) * this.glowDirection;
                if (this.glowIntensity >= 1) {
                    this.glowIntensity = 1;
                    this.glowDirection = -1;
                } else if (this.glowIntensity <= 0) {
                    this.glowIntensity = 0;
                    this.glowDirection = 1;
                }

                // Slight floating movement
                this.offsetX += 0.01 * this.speed;
                this.offsetY += 0.015 * this.speed;
            }

            draw(ctx: CanvasRenderingContext2D) {
                const currentX = this.x + Math.sin(this.offsetX) * 5;
                const currentY = this.y + Math.cos(this.offsetY) * 5;

                // Glowing Halo
                if (this.glowIntensity > 0.1) {
                    ctx.beginPath();
                    // Particles should blur out larger to look like the reference
                    const currentRadius = radius * (1 + this.glowIntensity * 3);
                    ctx.arc(currentX, currentY, currentRadius, 0, Math.PI * 2);

                    const gradient = ctx.createRadialGradient(
                        currentX, currentY, 0,
                        currentX, currentY, currentRadius
                    );

                    gradient.addColorStop(0, this.glowColor);
                    gradient.addColorStop(1, 'transparent');

                    ctx.fillStyle = gradient;
                    ctx.globalAlpha = this.glowIntensity;
                    ctx.fill();
                    ctx.globalAlpha = 1.0;
                }

                // Core Solid Particle (rarely visible if glow is high, but adds texture)
                if (this.glowIntensity > 0.5) {
                    ctx.beginPath();
                    ctx.arc(currentX, currentY, radius * 0.5, 0, Math.PI * 2);
                    ctx.fillStyle = this.baseColor;
                    ctx.fill();
                }
            }
        }

        const init = () => {
            const rect = container.getBoundingClientRect();
            width = rect.width;
            height = rect.height;

            // Handle high DPI displays for retina sharpness
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            dots = [];

            // Sparse placement to match the light theme reference
            // Only add particles on the edges (left/right) to leave center clean
            const cols = Math.floor(width / gap);
            const rows = Math.floor(height / gap);

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    // We only want dots on the far left or far right (spray effect)
                    // or scattered randomly with low density.
                    const isEdge = i < cols * 0.3 || i > cols * 0.7;
                    const sparsity = Math.random();

                    if (isEdge && sparsity > 0.8) {
                        dots.push(new Dot(i * gap + (Math.random() * gap), j * gap + (Math.random() * gap)));
                    } else if (!isEdge && sparsity > 0.95) {
                        // Very few in the center
                        dots.push(new Dot(i * gap, j * gap));
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Optional background fill - we force white for this design
            if (backgroundOpacity > 0) {
                ctx.fillStyle = `rgba(255,255,255,${backgroundOpacity})`;
                ctx.fillRect(0, 0, width, height);
            }

            dots.forEach((dot) => {
                dot.update();
                dot.draw(ctx);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener("resize", handleResize);
        init();
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, [gap, radius, backgroundOpacity, speedMin, speedMax, speedScale]);

    return (
        <div
            ref={containerRef}
            className={cn("absolute inset-0 overflow-hidden w-full h-full", className)}
            style={{ opacity }}
        >
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
            />
        </div>
    );
}

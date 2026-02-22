import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface IntroScreenProps {
    onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Show the "Enter" button after 3 seconds
        const btnTimer = setTimeout(() => setShowButton(true), 3000);

        if (!containerRef.current) return;
        const container = containerRef.current;

        // @ts-ignore
        const THREE = window.THREE;

        if (!THREE) {
            console.error("Three.js failed to load. Skipping intro.");
            onComplete();
            return;
        }

        const scene = new THREE.Scene();

        // Orthographic camera for full screen quad
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        const uniforms = {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector3(1, 1, 1) },
        };

        const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `;

        const fragmentShader = `
        precision highp float;

        uniform float iTime;
        uniform vec3 iResolution;
        varying vec2 vUv;

        void mainImage(out vec4 fragColor, in vec2 fragCoord) {
            vec2 uv = fragCoord / iResolution.xy;
            float d = length(uv - 0.5) * 2.0;
            float t = d * d * 25.0 - iTime * 3.0;
            d = (cos(t) * 0.5 + 0.5) * (1.0 - d);
            vec3 col = 0.5 + 0.5 * cos(t / 20.0 + uv.xyx + vec3(0.0,2.0,4.0));
            fragColor = vec4(col, d);
        }

        void main() {
            vec2 fragCoord = vUv * iResolution.xy;
            vec4 color;
            mainImage(color, fragCoord);
            gl_FragColor = color;
        }
        `;

        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader,
            fragmentShader,
            transparent: true,
        });

        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(mesh);

        let isAnimating = true;
        const clock = new THREE.Clock();

        function animate() {
            if (!isAnimating) return;
            requestAnimationFrame(animate);

            uniforms.iTime.value += clock.getDelta();

            renderer.render(scene, camera);
        }

        animate();

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.iResolution.value.set(window.innerWidth, window.innerHeight, 1);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call

        return () => {
            isAnimating = false;
            clearTimeout(btnTimer);
            window.removeEventListener('resize', handleResize);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
            renderer.forceContextLoss();
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-[#050505] font-body overflow-hidden">


            <div ref={containerRef} className="absolute inset-0 z-0" />

            <div ref={textRef} className="cyber-text-overlay">
                A <span className="flicker-1">F</span>A<span className="flicker-2">L</span><span className="flicker-3">H</span>A
            </div>

            {/* Skip / Enter Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showButton ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 w-[90%] md:w-auto"
            >
                <button
                    onClick={onComplete}
                    className="group flex items-center justify-center w-full md:w-auto mx-auto rounded-sm bg-brand-surface1 border border-brand-surface2 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-mono font-bold text-brand-muted hover:text-brand-neon shadow-lg transition-all duration-300 hover:border-brand-neon hover:bg-brand-surface2 uppercase tracking-widest cursor-pointer"
                >
                    <span className="md:hidden">Acessar</span>
                    <span className="hidden md:inline">Acessar a Nova Realidade</span>
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </motion.div>
        </div>
    );
};

export default IntroScreen;

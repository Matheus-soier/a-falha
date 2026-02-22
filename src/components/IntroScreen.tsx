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
        scene.background = new THREE.Color(0x020000);
        scene.fog = new THREE.FogExp2(0x020000, 0.002);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.set(0, 0, 300);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Core twisted shape
        const knotGeo = new THREE.TorusKnotGeometry(80, 25, 200, 32, 3, 4);
        const knotMat = new THREE.MeshStandardMaterial({
            color: 0xaa0000,
            emissive: 0x330000,
            wireframe: true,
            transparent: true,
            opacity: 0.8
        });
        const knotMesh = new THREE.Mesh(knotGeo, knotMat);
        scene.add(knotMesh);

        // Inner solid core
        const coreGeo = new THREE.IcosahedronGeometry(60, 2);
        const coreMat = new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.9,
            roughness: 0.1,
            emissive: 0xff0000,
            emissiveIntensity: 0.1
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        knotMesh.add(coreMesh);

        // Ash Particles
        const particleCount = 2500;
        const particlesGeo = new THREE.BufferGeometry();
        const posArray = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 800;
        }
        particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMat = new THREE.PointsMaterial({
            size: 2,
            color: 0x888888,
            transparent: true,
            opacity: 0.6,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particlesMesh);

        // Lights
        const ambientLight = new THREE.AmbientLight(0x110000);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xff0000, 20, 500);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);

        const glitchLight = new THREE.PointLight(0xffffff, 0, 1000);
        scene.add(glitchLight);

        let isAnimating = true;
        const clock = new THREE.Clock();

        function animate() {
            if (!isAnimating) return;
            requestAnimationFrame(animate);

            const time = clock.getElapsedTime();

            // Rotate core
            knotMesh.rotation.x = time * 0.1;
            knotMesh.rotation.y = time * 0.15;
            coreMesh.rotation.x = -time * 0.2;
            coreMesh.rotation.z = time * 0.1;

            // Pulsing heartbeat effect
            const pulse = Math.sin(time * 5) * 0.5 + 0.5;
            coreMat.emissiveIntensity = 0.1 + pulse * 0.6;
            pointLight.intensity = 10 + pulse * 20;

            // Creepy camera drift
            camera.position.x = Math.sin(time * 0.2) * 20;
            camera.position.y = Math.cos(time * 0.3) * 20;
            camera.lookAt(0, 0, 0);

            // Particles drifting up like ash
            const positions = particlesGeo.attributes.position.array;
            for (let i = 1; i < particleCount * 3; i += 3) {
                positions[i] += 0.5;
                if (positions[i] > 400) {
                    positions[i] = -400;
                }
            }
            particlesGeo.attributes.position.needsUpdate = true;

            // Random lightning / glitch flashes
            if (Math.random() > 0.98) {
                glitchLight.intensity = 50 + Math.random() * 100;
                glitchLight.position.set((Math.random() - 0.5) * 300, (Math.random() - 0.5) * 300, 100);
            } else {
                glitchLight.intensity *= 0.8; // fade out fast
            }

            renderer.render(scene, camera);
        }

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

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

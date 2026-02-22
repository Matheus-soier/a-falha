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

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(0, 0, 500);

        const center = new THREE.Vector3();
        center.z = -1000;

        const video = document.createElement('video');
        video.id = 'video';
        video.loop = true;
        video.muted = true;
        video.crossOrigin = 'anonymous';
        video.playsInline = true;
        video.style.display = 'none';

        const source = document.createElement('source');
        source.src = '/kinect.webm';
        video.appendChild(source);
        document.body.appendChild(video);

        video.play().catch(console.error);

        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.NearestFilter;
        texture.generateMipmaps = false;

        const width = 640, height = 480;
        const nearClipping = 850, farClipping = 4000;

        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(width * height * 3);

        for (let i = 0, j = 0, l = vertices.length; i < l; i += 3, j++) {
            vertices[i] = j % width;
            vertices[i + 1] = Math.floor(j / width);
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                'map': { value: texture },
                'width': { value: width },
                'height': { value: height },
                'nearClipping': { value: nearClipping },
                'farClipping': { value: farClipping },
                'pointSize': { value: 2 },
                'zOffset': { value: 1000 }
            },
            vertexShader: `
                uniform sampler2D map;

                uniform float width;
                uniform float height;
                uniform float nearClipping, farClipping;

                uniform float pointSize;
                uniform float zOffset;

                varying vec2 vUv;

                const float XtoZ = 1.11146; // tan( 1.0144686 / 2.0 ) * 2.0;
                const float YtoZ = 0.83359; // tan( 0.7898090 / 2.0 ) * 2.0;

                void main() {

                    vUv = vec2( position.x / width, position.y / height );

                    vec4 color = texture2D( map, vUv );
                    float depth = ( color.r + color.g + color.b ) / 3.0;

                    // Projection code by @kcmic

                    float z = ( 1.0 - depth ) * (farClipping - nearClipping) + nearClipping;

                    vec4 pos = vec4(
                        ( position.x / width - 0.5 ) * z * XtoZ,
                        ( position.y / height - 0.5 ) * z * YtoZ,
                        - z + zOffset,
                        1.0);

                    gl_PointSize = pointSize;
                    gl_Position = projectionMatrix * modelViewMatrix * pos;

                }
            `,
            fragmentShader: `
                uniform sampler2D map;

                varying vec2 vUv;

                void main() {

                    vec4 color = texture2D( map, vUv );
                    gl_FragColor = vec4( color.r, color.g, color.b, 0.2 );

                }
            `,
            blending: THREE.AdditiveBlending,
            depthTest: false,
            depthWrite: false,
            transparent: true
        });

        const mesh = new THREE.Points(geometry, material);
        scene.add(mesh);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const mouse = new THREE.Vector3(0, 0, 1);

        const onDocumentMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX - window.innerWidth / 2) * 8;
            mouse.y = (event.clientY - window.innerHeight / 2) * 8;
        };
        document.addEventListener('mousemove', onDocumentMouseMove);

        let isAnimating = true;

        function animate() {
            if (!isAnimating) return;
            requestAnimationFrame(animate);

            camera.position.x += (mouse.x - camera.position.x) * 0.05;
            camera.position.y += (-mouse.y - camera.position.y) * 0.05;
            camera.lookAt(center);

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
            document.removeEventListener('mousemove', onDocumentMouseMove);

            if (video && video.parentNode) {
                video.pause();
                video.removeAttribute('src');
                video.load();
                video.parentNode.removeChild(video);
            }

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

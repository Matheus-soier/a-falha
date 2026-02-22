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
        // Show the "Enter" button after 3 seconds so users who want to skip can do it.
        const btnTimer = setTimeout(() => setShowButton(true), 3000);

        if (!containerRef.current) return;
        const container = containerRef.current;
        const cyberText = textRef.current;

        // @ts-ignore
        const THREE = window.THREE;
        // @ts-ignore
        const gsap = window.gsap;

        if (!THREE || !gsap) {
            console.error("Three.js or GSAP failed to load. Skipping intro.");
            onComplete();
            return;
        }

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.0015);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 4000);
        camera.position.set(0, 0, 450);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enablePan = false;
        controls.minDistance = 200;
        controls.maxDistance = 600;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        const bangLight = new THREE.PointLight(0x1EE087, 0, 800);
        bangLight.position.set(0, 0, 0);
        scene.add(bangLight);

        const godLight = new THREE.PointLight(0x00ffff, 0, 1500);
        scene.add(godLight);

        const radius = 100;
        let earthMesh: any, particlesMesh: any;
        let particleStartPositions: any, particleCorePositions: any, particleExplosionPositions: any, particleTargetPositions: any;
        const particleCount = 10000;

        let robotGroup: any, head: any, shoulderL: any, elbowL: any, handL: any, shoulderR: any, elbowR: any, handR: any;
        let holoMat: any, glowEyeMat: any;

        function createTextAtlas() {
            const canvas = document.createElement('canvas');
            canvas.width = 1024; canvas.height = 512;
            const ctx = canvas.getContext('2d');
            if (!ctx) return new THREE.CanvasTexture(canvas);

            ctx.fillStyle = 'rgba(0,0,0,0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 80px monospace';
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';

            const cols = 8, rows = 4;
            const cellW = canvas.width / cols, cellH = canvas.height / rows;

            for (let i = 0; i < 26; i++) {
                const char = String.fromCharCode(65 + i);
                const x = (i % cols) * cellW + cellW / 2;
                const y = Math.floor(i / cols) * cellH + cellH / 2;
                ctx.fillText(char, x, y);
            }
            return new THREE.CanvasTexture(canvas);
        }

        function createParticles() {
            const geometry = new THREE.BufferGeometry();
            particleStartPositions = new Float32Array(particleCount * 3);
            particleCorePositions = new Float32Array(particleCount * 3);
            particleExplosionPositions = new Float32Array(particleCount * 3);
            particleTargetPositions = new Float32Array(particleCount * 3);

            const colorArray = new Float32Array(particleCount * 3);
            const charIndices = new Float32Array(particleCount);
            const colorBase = new THREE.Color(0x1EE087);

            for (let i = 0; i < particleCount; i++) {
                const startZ = Math.random() * 1000 + 400;
                particleStartPositions[i * 3] = (Math.random() - 0.5) * 1500;
                particleStartPositions[i * 3 + 1] = (Math.random() - 0.5) * 1500;
                particleStartPositions[i * 3 + 2] = startZ;

                const y = 1 - (i / (particleCount - 1)) * 2;
                const r = Math.sqrt(1 - y * y);
                const theta = i * 2.399963;

                const coreRadius = 1.5;
                particleCorePositions[i * 3] = Math.cos(theta) * r * coreRadius;
                particleCorePositions[i * 3 + 1] = y * coreRadius;
                particleCorePositions[i * 3 + 2] = Math.sin(theta) * r * coreRadius;

                const explosionPower = radius * (2.5 + Math.random() * 5);
                particleExplosionPositions[i * 3] = Math.cos(theta) * r * explosionPower;
                particleExplosionPositions[i * 3 + 1] = y * explosionPower;
                particleExplosionPositions[i * 3 + 2] = Math.sin(theta) * r * explosionPower;

                particleTargetPositions[i * 3] = Math.cos(theta) * r * radius;
                particleTargetPositions[i * 3 + 1] = y * radius;
                particleTargetPositions[i * 3 + 2] = Math.sin(theta) * r * radius;

                colorArray[i * 3] = colorBase.r;
                colorArray[i * 3 + 1] = colorBase.g;
                colorArray[i * 3 + 2] = colorBase.b;

                if (startZ > 1100) {
                    charIndices[i] = Math.random() > 0.5 ? 12 : 18;
                } else {
                    charIndices[i] = Math.floor(Math.random() * 26);
                }
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(particleStartPositions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
            geometry.setAttribute('charIndex', new THREE.BufferAttribute(charIndices, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    uTexture: { value: createTextAtlas() },
                    uSize: { value: 45.0 },
                    uOpacity: { value: 1.0 },
                    uGlow: { value: 1.5 }
                },
                vertexShader: `
                    attribute float charIndex;
                    attribute vec3 color;
                    varying vec3 vColor; varying float vCharIndex;
                    uniform float uSize;
                    void main() {
                        vColor = color; vCharIndex = charIndex;
                        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                        gl_PointSize = uSize * (300.0 / -mvPosition.z);
                        gl_Position = projectionMatrix * mvPosition;
                    }
                `,
                fragmentShader: `
                    uniform sampler2D uTexture;
                    uniform float uOpacity; uniform float uGlow;
                    varying vec3 vColor; varying float vCharIndex;
                    void main() {
                        float cols = 8.0; float rows = 4.0;
                        float col = mod(vCharIndex, cols);
                        float row = floor(vCharIndex / cols);
                        vec2 uv = gl_PointCoord;
                        uv.x = (col + uv.x) / cols;
                        uv.y = 1.0 - ((row + 1.0 - uv.y) / rows);
                        vec4 texColor = texture2D(uTexture, uv);
                        if (texColor.a < 0.1) discard; 
                        gl_FragColor = vec4(vColor * uGlow, texColor.a * 0.9 * uOpacity);
                    }
                `,
                transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
            });

            particlesMesh = new THREE.Points(geometry, material);
            scene.add(particlesMesh);
        }

        function createEarth() {
            const textureLoader = new THREE.TextureLoader();
            const earthTexture = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg', function () {
                startBigBangAnimation();
            });

            const geometry = new THREE.SphereGeometry(radius - 1, 64, 64);
            const material = new THREE.MeshStandardMaterial({
                map: earthTexture,
                transparent: true, opacity: 0,
                roughness: 0.8, metalness: 0.1
            });

            earthMesh = new THREE.Mesh(geometry, material);
            earthMesh.rotation.z = 23.5 * Math.PI / 180;
            particlesMesh.rotation.z = 23.5 * Math.PI / 180;

            // Make sure earth rotates independently, do not parent the robot to it.
            scene.add(earthMesh);
        }

        function createRobot() {
            robotGroup = new THREE.Group();

            holoMat = new THREE.MeshStandardMaterial({
                color: 0x111111,
                metalness: 0.9,
                roughness: 0.2,
                transparent: true,
                opacity: 0,
                side: THREE.DoubleSide
            });

            glowEyeMat = new THREE.MeshBasicMaterial({
                color: 0x1EE087,
                transparent: true,
                opacity: 0
            });

            // --- SPINE ---
            const spineGroup = new THREE.Group();
            const spineGeo = new THREE.CylinderGeometry(8, 12, 140, 8);
            const spine = new THREE.Mesh(spineGeo, holoMat);
            spineGroup.add(spine);

            // Spinal rings
            for (let i = 0; i < 5; i++) {
                const ringGeo = new THREE.TorusGeometry(18, 3, 8, 16);
                const ring = new THREE.Mesh(ringGeo, holoMat);
                ring.position.y = -40 + i * 20;
                ring.rotation.x = Math.PI / 2;
                spineGroup.add(ring);
            }
            spineGroup.position.y = 60;
            robotGroup.add(spineGroup);

            // --- CHEST ---
            const chestGroup = new THREE.Group();
            chestGroup.position.set(0, 100, 5);

            // Main thorax
            const chestGeo = new THREE.BoxGeometry(60, 50, 40);
            const chest = new THREE.Mesh(chestGeo, holoMat);
            chestGroup.add(chest);

            // Chest Armor Plates
            const plateGeo = new THREE.BoxGeometry(70, 20, 45);
            const plate1 = new THREE.Mesh(plateGeo, holoMat);
            plate1.position.set(0, 15, 0);
            plate1.rotation.x = -0.1;
            chestGroup.add(plate1);

            const plate2 = new THREE.Mesh(plateGeo, holoMat);
            plate2.position.set(0, -10, 5);
            plate2.rotation.x = 0.1;
            chestGroup.add(plate2);

            // Glowing Core
            const coreGeo = new THREE.CylinderGeometry(15, 15, 46, 16);
            const coreMesh = new THREE.Mesh(coreGeo, glowEyeMat);
            coreMesh.rotation.x = Math.PI / 2;
            coreMesh.position.set(0, 0, 5);
            chestGroup.add(coreMesh);

            robotGroup.add(chestGroup);

            // --- ABDOMEN ---
            const absGeo = new THREE.CylinderGeometry(20, 15, 50, 8);
            const abs = new THREE.Mesh(absGeo, holoMat);
            abs.position.set(0, 45, 5);
            robotGroup.add(abs);

            // --- HEAD ---
            head = new THREE.Group();
            head.position.set(0, 150, 5);

            // Base skull
            const skullGeo = new THREE.BoxGeometry(26, 32, 30);
            const skull = new THREE.Mesh(skullGeo, holoMat);
            head.add(skull);

            // Crown / Helmet top
            const crownGeo = new THREE.BoxGeometry(30, 10, 32);
            const crown = new THREE.Mesh(crownGeo, holoMat);
            crown.position.set(0, 16, -2);
            head.add(crown);

            // Jaw
            const jawGeo = new THREE.BoxGeometry(28, 12, 15);
            const jaw = new THREE.Mesh(jawGeo, holoMat);
            jaw.position.set(0, -14, 10);
            head.add(jaw);

            // Side Antennae / Ears
            const earGeo = new THREE.CylinderGeometry(5, 5, 34, 16);
            const earR = new THREE.Mesh(earGeo, holoMat);
            earR.rotation.x = Math.PI / 2;
            earR.position.set(15, 0, 0);
            head.add(earR);
            const earL = new THREE.Mesh(earGeo, holoMat);
            earL.rotation.x = Math.PI / 2;
            earL.position.set(-15, 0, 0);
            head.add(earL);

            // Visor (Glowing Eyes)
            const visorGeo = new THREE.BoxGeometry(22, 6, 2);
            const visor = new THREE.Mesh(visorGeo, glowEyeMat);
            visor.position.set(0, 4, 16);
            head.add(visor);

            // Mean eyebrows / angled armor over visor
            const browGeo = new THREE.BoxGeometry(24, 8, 4);
            const brow = new THREE.Mesh(browGeo, holoMat);
            brow.position.set(0, 10, 16);
            brow.rotation.x = 0.2;
            head.add(brow);

            robotGroup.add(head);

            // --- SHOULDERS & ARMS ---
            shoulderL = new THREE.Group();
            shoulderL.position.set(-55, 120, 0);
            robotGroup.add(shoulderL);
            createArm(shoulderL, false);

            shoulderR = new THREE.Group();
            shoulderR.position.set(55, 120, 0);
            robotGroup.add(shoulderR);
            createArm(shoulderR, true);

            robotGroup.scale.set(6, 6, 6);
            robotGroup.position.set(0, -650, -150);

            scene.add(robotGroup);
        }

        function createArm(shoulderGroup: any, isRight: boolean) {
            // Massive Pauldron (Shoulder Armor)
            const pauldronGroup = new THREE.Group();
            const pauldronGeo1 = new THREE.BoxGeometry(35, 30, 40);
            const p1 = new THREE.Mesh(pauldronGeo1, holoMat);
            pauldronGroup.add(p1);

            const pauldronGeo2 = new THREE.BoxGeometry(40, 20, 45);
            const p2 = new THREE.Mesh(pauldronGeo2, holoMat);
            p2.position.set(isRight ? 5 : -5, 10, 0);
            p2.rotation.z = isRight ? -0.2 : 0.2;
            pauldronGroup.add(p2);

            shoulderGroup.add(pauldronGroup);

            // Upper Arm
            const upperArmGroup = new THREE.Group();
            shoulderGroup.add(upperArmGroup);

            const upperArmGeo = new THREE.CylinderGeometry(12, 10, 60, 8);
            const upperArmMesh = new THREE.Mesh(upperArmGeo, holoMat);
            upperArmMesh.position.y = -40;
            upperArmGroup.add(upperArmMesh);

            // Elbow Joint
            const elbowGroup = new THREE.Group();
            elbowGroup.position.set(0, -70, 0);
            upperArmGroup.add(elbowGroup);

            const elbowJointGeo = new THREE.SphereGeometry(14, 16, 16);
            const elbowJoint = new THREE.Mesh(elbowJointGeo, holoMat);
            elbowGroup.add(elbowJoint);

            // Lower Arm / Forearm
            const lowerArmGeo = new THREE.CylinderGeometry(10, 14, 60, 8);
            const lowerArmMesh = new THREE.Mesh(lowerArmGeo, holoMat);
            lowerArmMesh.position.y = -35;
            elbowGroup.add(lowerArmMesh);

            // Forearm armor / blade
            const bladeGeo = new THREE.BoxGeometry(8, 50, 20);
            const blade = new THREE.Mesh(bladeGeo, holoMat);
            blade.position.set(isRight ? 10 : -10, -35, 5);
            elbowGroup.add(blade);

            // Hand / Claws
            const handGeo = new THREE.BoxGeometry(16, 20, 16);
            const handMesh = new THREE.Mesh(handGeo, holoMat);
            handMesh.position.y = -75;

            // Claws
            const clawGeo = new THREE.CylinderGeometry(2, 0.5, 25, 4);
            for (let i = 0; i < 3; i++) {
                const claw = new THREE.Mesh(clawGeo, holoMat);
                claw.position.set((i - 1) * 6, -15, 6);
                claw.rotation.x = -0.2;
                handMesh.add(claw);
            }

            if (isRight) {
                handR = handMesh;
                elbowR = elbowGroup;
            } else {
                handL = handMesh;
                elbowL = elbowGroup;
            }
            elbowGroup.add(handMesh);
        }

        function startBigBangAnimation() {
            createRobot();

            const animProps = { p1: 0, p2: 0, p3: 0, earthOpacity: 0 };
            const tl = gsap.timeline();

            const updatePositions = () => {
                const positions = particlesMesh.geometry.attributes.position.array;
                for (let i = 0; i < particleCount; i++) {
                    const idx = i * 3;
                    let x = THREE.MathUtils.lerp(particleStartPositions[idx], particleCorePositions[idx], animProps.p1);
                    let y = THREE.MathUtils.lerp(particleStartPositions[idx + 1], particleCorePositions[idx + 1], animProps.p1);
                    let z = THREE.MathUtils.lerp(particleStartPositions[idx + 2], particleCorePositions[idx + 2], animProps.p1);

                    if (animProps.p2 > 0) {
                        x = THREE.MathUtils.lerp(x, particleExplosionPositions[idx], animProps.p2);
                        y = THREE.MathUtils.lerp(y, particleExplosionPositions[idx + 1], animProps.p2);
                        z = THREE.MathUtils.lerp(z, particleExplosionPositions[idx + 2], animProps.p2);
                    }
                    if (animProps.p3 > 0) {
                        x = THREE.MathUtils.lerp(x, particleTargetPositions[idx], animProps.p3);
                        y = THREE.MathUtils.lerp(y, particleTargetPositions[idx + 1], animProps.p3);
                        z = THREE.MathUtils.lerp(z, particleTargetPositions[idx + 2], animProps.p3);
                    }
                    positions[idx] = x; positions[idx + 1] = y; positions[idx + 2] = z;
                }
                particlesMesh.geometry.attributes.position.needsUpdate = true;
            };

            tl.to(animProps, { p1: 1, duration: 4.0, ease: "expo.in", onUpdate: updatePositions }, 0);
            tl.to(bangLight, { intensity: 8, duration: 3.9, ease: "expo.in" }, 0);
            tl.to(particlesMesh.material.uniforms.uGlow, { value: 6.0, duration: 3.9, ease: "expo.in" }, 0);

            tl.to(bangLight, { intensity: 20, duration: 0.1 }, 3.9);
            tl.to(particlesMesh.material.uniforms.uGlow, { value: 12.0, duration: 0.1 }, 3.9);

            tl.to(bangLight, { intensity: 0, duration: 2.5 }, 4.0);
            tl.to(particlesMesh.material.uniforms.uGlow, { value: 1.5, duration: 2.0 }, 4.0);
            tl.to(animProps, { p2: 1, duration: 0.8, ease: "expo.out", onUpdate: updatePositions }, 4.0);

            tl.to(animProps, { p3: 1, duration: 3.5, ease: "power3.inOut", onUpdate: updatePositions }, 4.2);

            tl.to(animProps, {
                earthOpacity: 1, duration: 2.5, ease: "power2.inOut",
                onUpdate: () => { earthMesh.material.opacity = animProps.earthOpacity; }
            }, 5.7);

            tl.to(particlesMesh.material.uniforms.uOpacity, { value: 0, duration: 2.0, ease: "power2.inOut" }, 6.0);

            if (cyberText) {
                tl.to(cyberText, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }, 7.5);
            }

            const robTl = gsap.timeline({ delay: 9.0 });

            // Animate opacity to 1.0 (fully visible)
            robTl.to(holoMat, { opacity: 1.0, duration: 4.0, ease: "power2.inOut" }, 0);
            robTl.to(glowEyeMat, { opacity: 0.8, duration: 4.0, ease: "power2.inOut" }, 0);
            robTl.to(godLight, { intensity: 1.5, duration: 4.0 }, 0);

            robTl.to(head.rotation, { x: Math.PI / 10, duration: 3, ease: "power2.inOut" }, 1.0);

            const armDuration = 3.5;
            const armEase = "power2.inOut";

            robTl.to(shoulderL.rotation, { x: Math.PI / 2, z: -Math.PI / 4, duration: armDuration, ease: armEase }, 2.5);
            robTl.to(elbowL.rotation, { x: -Math.PI / 1.5, duration: armDuration, ease: armEase }, 2.5);
            robTl.to(handL.rotation, { z: Math.PI / 2, duration: armDuration, ease: armEase }, 2.5);

            robTl.to(shoulderR.rotation, { x: Math.PI / 2, z: Math.PI / 4, duration: armDuration, ease: armEase }, 2.5);
            robTl.to(elbowR.rotation, { x: -Math.PI / 1.5, duration: armDuration, ease: armEase }, 2.5);
            robTl.to(handR.rotation, { z: -Math.PI / 2, duration: armDuration, ease: armEase }, 2.5);

            robTl.to(head.rotation, { x: Math.PI / 6, duration: 3, ease: "power2.inOut" }, 4.0);

            robTl.to({}, { duration: 2.0 }, 6.0);

            const retractDuration = 3;
            robTl.to(shoulderL.rotation, { x: 0, z: 0, duration: retractDuration, ease: armEase }, 8.0);
            robTl.to(elbowL.rotation, { x: 0, duration: retractDuration, ease: armEase }, 8.0);
            robTl.to(handL.rotation, { z: 0, duration: retractDuration, ease: armEase }, 8.0);

            robTl.to(shoulderR.rotation, { x: 0, z: 0, duration: retractDuration, ease: armEase }, 8.0);
            robTl.to(elbowR.rotation, { x: 0, duration: retractDuration, ease: armEase }, 8.0);
            robTl.to(handR.rotation, { z: 0, duration: retractDuration, ease: armEase }, 8.0);

            robTl.to(head.rotation, { x: 0, duration: retractDuration, ease: armEase }, 8.0);

            // Fade out the robot at the end
            robTl.to(holoMat, { opacity: 0, duration: 3.5, ease: "power2.inOut" }, 10.0);
            robTl.to(glowEyeMat, { opacity: 0, duration: 3.5, ease: "power2.inOut" }, 10.0);
            robTl.to(godLight, { intensity: 0, duration: 3.5 }, 10.0);
        }

        let isAnimating = true;
        function animate() {
            if (!isAnimating) return;
            requestAnimationFrame(animate);

            if (earthMesh && particlesMesh) {
                const rotationSpeed = 0.001;
                earthMesh.rotation.y += rotationSpeed;
                particlesMesh.rotation.y += rotationSpeed;
            }

            if (robotGroup) {
                const time = Date.now() * 0.0005;
                // Make the robot levitate tall behind the earth
                robotGroup.position.y = -650 + Math.sin(time) * 15;
            }

            controls.update();
            renderer.render(scene, camera);
        }

        createParticles();
        createEarth();
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
            gsap.globalTimeline.clear(); // Clear all GSAP animations
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-[#050505] font-body overflow-hidden">
            <style>
                {`
                .cyber-text-overlay {
                    position: absolute;
                    bottom: 12%;
                    width: 100%;
                    text-align: center;
                    color: rgba(30, 224, 135, 0.25); 
                    font-family: 'Bevan', serif;
                    font-size: clamp(2rem, 5vw, 4rem);
                    letter-spacing: 12px;
                    text-shadow: 0 0 15px rgba(30, 224, 135, 0.15);
                    z-index: 10;
                    opacity: 0;
                    transform: translateY(30px);
                    pointer-events: none;
                    mix-blend-mode: screen; 
                }

                .flicker-1 { animation: letreiro-falha-1 3s infinite; }
                .flicker-2 { animation: letreiro-falha-2 4.5s infinite; }
                .flicker-3 { animation: letreiro-falha-3 2s infinite; }

                @keyframes letreiro-falha-1 {
                    0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; text-shadow: 0 0 15px rgba(30, 224, 135, 0.15); }
                    20%, 24%, 55% { opacity: 0.1; text-shadow: none; }
                }

                @keyframes letreiro-falha-2 {
                    0%, 40%, 44%, 100% { opacity: 1; }
                    42% { opacity: 0; }
                }

                @keyframes letreiro-falha-3 {
                    0%, 8%, 12%, 100% { opacity: 1; text-shadow: 0 0 15px rgba(30, 224, 135, 0.15); }
                    10% { opacity: 0.2; text-shadow: none; }
                }
                `}
            </style>

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

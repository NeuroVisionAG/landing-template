"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { MeshTransmissionMaterial, Float, Points } from "@react-three/drei";

export default function HeroObject() {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);
    const pointsRef = useRef<THREE.Points>(null);

    // Generate random points for the "network"
    const count = 500;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const radius = 2 + Math.random() * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = radius * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (!meshRef.current || !groupRef.current || !pointsRef.current) return;

        const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const time = state.clock.getElapsedTime();

        // Rotation & Floating
        groupRef.current.rotation.y = time * 0.1 + scroll * 2;
        groupRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;

        // Transformation Logic
        // 0 -> 0.3: Core is visible
        // 0.3 -> 0.7: Core fades/shrinks, network appears

        const coreScale = THREE.MathUtils.lerp(1, 0.2, THREE.MathUtils.clamp((scroll - 0.1) * 3, 0, 1));
        meshRef.current.scale.setScalar(coreScale);
        (meshRef.current.material as any).opacity = THREE.MathUtils.lerp(1, 0, THREE.MathUtils.clamp((scroll - 0.2) * 5, 0, 1));

        // Points expansion
        const expand = THREE.MathUtils.lerp(0, 1.5, THREE.MathUtils.clamp((scroll - 0.2) * 4, 0, 1));
        pointsRef.current.scale.setScalar(1 + expand);
        (pointsRef.current.material as any).opacity = THREE.MathUtils.lerp(0.1, 1, THREE.MathUtils.clamp((scroll - 0.2) * 5, 0, 1));

        // Subtle pulse for the "core" inside
        const coreIntens = 1 + Math.sin(time * 2) * 0.5;
        if (meshRef.current.children[0]) {
            (meshRef.current.children[0] as any).material.emissiveIntensity = coreIntens * (1 - scroll);
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh ref={meshRef}>
                    <sphereGeometry args={[1.2, 64, 64]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={1}
                        chromaticAberration={0.025}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.1}
                        temporalDistortion={0.1}
                        clearcoat={1}
                        attenuationDistance={0.5}
                        attenuationColor="#ffffff"
                        color="#e0f2fe"
                        transparent
                    />

                    <mesh>
                        <sphereGeometry args={[0.4, 32, 32]} />
                        <meshStandardMaterial
                            color="#0ea5e9"
                            emissive="#38bdf8"
                            emissiveIntensity={2}
                            toneMapped={false}
                        />
                    </mesh>
                </mesh>
            </Float>

            {/* The Network (Points) */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.03}
                    color="#0ea5e9"
                    transparent
                    opacity={0.1}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* Connecting Lines (Simulated with few segments or just glow) */}
            <gridHelper args={[20, 20, "#e2e8f0", "#f8fafc"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -5]} />
        </group>
    );
}

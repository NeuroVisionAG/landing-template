"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import HeroObject from "./HeroObject";

export default function Scene() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas shadows gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <HeroObject />
                </Suspense>
                {/* <OrbitControls enableZoom={false} /> */}
            </Canvas>
        </div>
    );
}

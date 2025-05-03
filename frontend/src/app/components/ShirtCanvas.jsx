'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useTexture, OrbitControls, Decal } from '@react-three/drei';
import * as THREE from 'three';
import { slideAnimation } from '../config/motion';
import { motion } from 'framer-motion';

const ShirtModel = ({ color = '#facc15' }) => {
    const { nodes } = useGLTF('/shirt_baked.glb');
    const logo = useTexture('/threejs.png');

    const mesh = Object.values(nodes).find((n) => n.isMesh);
    if (!mesh) return null;

    const material = new THREE.MeshStandardMaterial({ color });

    return (
        <mesh geometry={mesh.geometry} material={material} scale={1.5}>
            <Decal
                position={[0.005, -0.0015, 0.15]}
                rotation={[0, 0, 0]}
                scale={0.2}
                map={logo}
                flatShading
            />
        </mesh>
    );
};

const ShirtCanvas = () => (
    <motion.div
        className="w-full h-screen flex items-center justify-center p-4 md:p-10"
        {...slideAnimation('right')}
    >
        <div className="w-full max-w-[600px] h-[80vh]">
            <Canvas camera={{ position: [0, -0.05, 2], fov: 35 }} shadows>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <ShirtModel />
                    <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
        </div>
    </motion.div>
);

export default ShirtCanvas;
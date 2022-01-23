import * as React from 'react';
import { useState, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import type { MeshRefType } from '@ctypes/MeshRefType';


export const LogoBlock = () => {
    const [bufor, setBufor] = useState(true);
    const gltf = useLoader(GLTFLoader, '/img/crying_obsidian.gltf');
    const meshRef = useRef<MeshRefType>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.z = clock.getElapsedTime() / 2;
            meshRef.current.rotation.x = clock.getElapsedTime() / 2;

            bufor
                ? meshRef.current.position.y += 0.015
                : meshRef.current.position.y -= 0.015;

            if (meshRef.current.position.y >= 0.6) setBufor(false)
            else if (meshRef.current.position.y <= -0.6) setBufor(true)
        }
    });

    return (
        <primitive
            object={gltf.scene}
            scale={1.5}
            ref={meshRef}
        />
    )
}
import * as React from 'react';
import { useState, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber'

import Image from 'next/image';
import { Button } from '@components/shared/Button';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import type { MeshRefType } from '@ctypes/MeshRefType';


import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Scene() {
    const [scale, setScale] = useState(1.72);

    const gltf = useLoader(GLTFLoader, '/img/crying_obsidian.gltf');

    const meshRef = useRef<MeshRefType>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.z = clock.getElapsedTime() / 3;
            meshRef.current.rotation.y = clock.getElapsedTime() / 4.5;
            meshRef.current.rotation.x = clock.getElapsedTime() / 5.30;
        }
    });

    const handleReScale = (scale: number) => setScale(scale);

    return (
        <primitive
            ref={meshRef}
            object={gltf.scene}
            onPointerEnter={() => handleReScale(1.82)}
            onPointerLeave={() => handleReScale(1.72)}
            scale={scale}
            rotation={[Math.PI / 1.54, 0, 2.0]}
        />
    )
}

export const Hero: React.FC = () => {
    return (
        <header className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-4 md:px-24 lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row mt-6 lg:mt-0">
                <div className="mb-3 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="text-xs text-primary-200 font-bold tracking-wide mb-4 px-3 py-px">
                                WERSJA: 1.18.2
                            </p>
                        </div>

                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-text sm:text-4xl sm:leading-none">
                            Dołącz do nas
                            <br className="hidden md:block" />
                            i baw się razem z nami
                        </h2>

                        <p className="text-base text-gray-500 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:flex-row">
                        <Button
                            title="Skupiuj Adres IP"
                            ariaLabel="Skopiuj adres ip serwera"
                        />
                    </div>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                    {/* <Canvas>
                        <Suspense fallback={null}>
                            <ambientLight />
                            <Scene />
                        </Suspense>
                    </Canvas> */}

                    <Image
                        src="/img/render.png"
                        alt="Minecraft Render"
                        width={520}
                        height={520}
                        className="mx-auto"
                    />
                </div>
            </div>
        </header>
    );
}
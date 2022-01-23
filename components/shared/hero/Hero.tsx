import * as React from 'react';
import { useState, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber'
import { useAppDispatch } from '@redux/hooks';

import Image from 'next/image';
import { Button } from '@components/shared/Button';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { create } from '@redux/slices/AlertsSlice';

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
    const dispatch = useAppDispatch();

    const handleCopy = () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_SERVER_IP ?? '');

        dispatch(create({
            id: Math.floor(Math.random() * 999999),
            title: 'Adres IP został skopiowany',
            content: 'Możesz go teraz wkleić za pomocą CTRL+V'
        }));
    }

    return (
        <header className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl relative mx-auto px-4 md:px-24 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between mt-6 lg:mt-0">
                <div className="mb-3 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div
                        data-aos="fade-right"
                        data-aos-delay="450"
                        className="max-w-xl mb-6"
                    >
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

                    <div
                        data-aos="zoom-in-right"
                        data-aos-delay="850"
                        className="flex flex-col items-center md:flex-row"
                    >
                        <Button
                            title="Skupiuj Adres IP"
                            ariaLabel="Skopiuj adres ip serwera"
                            handleClick={handleCopy}
                        />
                    </div>
                </div>

                <div
                    data-aos="zoom-in-left"
                    data-aos-delay="850"
                    className="lg:w-1/2 flex justify-center"
                >
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
                        priority
                        className="mx-auto z-10"
                    />
                </div>
            </div>
        </header>
    );
}
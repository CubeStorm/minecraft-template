import * as React from 'react';

import { Suspense } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { LogoBlock } from '@components/shared/nav/LogoBlock';


interface LogoProps {
    mobile?: boolean
}

export const Logo: React.FC<LogoProps> = ({ mobile = false }) => {
    const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

    return (
        <Link href="/">
            <a
                aria-label={APP_NAME}
                title={APP_NAME}
                className="flex items-center mr-8"
            >
                {mobile || (
                    <div className="w-[64px] h-[64px]">
                        <Canvas>
                            <Suspense fallback={null}>
                                <ambientLight />
                                <LogoBlock />
                            </Suspense>
                        </Canvas>
                    </div>
                )}

                <h1 className="text:base md:text-lg lg:text-xl text-text font-bold tracking-wide uppercase ml-2">
                    {APP_NAME}
                </h1>
            </a>
        </Link>
    );
}
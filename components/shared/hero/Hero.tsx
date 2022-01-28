import * as React from 'react';
import { useAppDispatch } from '@redux/hooks';

import Image from 'next/image';
import { Button } from '@components/shared/Button';

import { create } from '@redux/slices/AlertsSlice';


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
                    <Image
                        src="/img/purple_render.png"
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
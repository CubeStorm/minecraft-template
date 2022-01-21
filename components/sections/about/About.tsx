import * as React from 'react';

import Image from 'next/image';
import { Container } from '@components/Container';
import { Title } from '@components/sections/Title';


export const About: React.FC = () => {
    return (
        <section className="w-full mx-auto py-6 lg:py-8 px-4 md:px-24 lg:px-8">
            <Container>
                <Title
                    title="Serwer i Społeczność"
                    description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
                />

                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="flex justify-center items-center mb-6 lg:w-1/2 lg:mb-0">
                        <Image
                            src="/img/bee_in_enderchest.png"
                            width={280}
                            height={280}
                            alt="Bee in enderchest"
                        />

                        <div>
                            <h5 className="text-2xl font-extrabold sm:text-3xl xl:text-4xl text-text">
                                9 312 435
                            </h5>

                            <small className="text-sm text-gray-700 font-bold">Zarejestrowanych graczy</small>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <p className="max-w-[500px] text-lg text-text text-center">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
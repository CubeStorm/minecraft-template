import * as React from 'react';

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
                        <div className="flex justify-centeritems-center w-16 h-16 mr-5 rounded-full bg-indigo-50 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16 xl:w-20 xl:h-20"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>

                        <div className="">
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
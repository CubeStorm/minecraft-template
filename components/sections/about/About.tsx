import * as React from 'react';

import Image from 'next/image';
import { Container } from '@components/Container';
import { Title } from '@components/sections/Title';


export const About: React.FC = () => {
    return (
        <section className="w-full">
            <div className="w-full">
                <svg id="wave" style={{ transform: 'rotate(0deg)', transition: '0.3s' }} viewBox="0 0 1440 190" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(62, 6, 95, 1)" offset="0%"></stop><stop stopColor="rgba(62, 6, 95, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: 'translate(0, 0px)', opacity: 1 }} fill="url(#sw-gradient-0)" d="M0,114L40,95C80,76,160,38,240,31.7C320,25,400,51,480,53.8C560,57,640,38,720,38C800,38,880,57,960,76C1040,95,1120,114,1200,104.5C1280,95,1360,57,1440,38C1520,19,1600,19,1680,34.8C1760,51,1840,82,1920,91.8C2000,101,2080,89,2160,85.5C2240,82,2320,89,2400,76C2480,63,2560,32,2640,31.7C2720,32,2800,63,2880,72.8C2960,82,3040,70,3120,69.7C3200,70,3280,82,3360,76C3440,70,3520,44,3600,47.5C3680,51,3760,82,3840,95C3920,108,4000,101,4080,85.5C4160,70,4240,44,4320,50.7C4400,57,4480,95,4560,101.3C4640,108,4720,82,4800,69.7C4880,57,4960,57,5040,66.5C5120,76,5200,95,5280,85.5C5360,76,5440,38,5520,19C5600,0,5680,0,5720,0L5760,0L5760,190L5720,190C5680,190,5600,190,5520,190C5440,190,5360,190,5280,190C5200,190,5120,190,5040,190C4960,190,4880,190,4800,190C4720,190,4640,190,4560,190C4480,190,4400,190,4320,190C4240,190,4160,190,4080,190C4000,190,3920,190,3840,190C3760,190,3680,190,3600,190C3520,190,3440,190,3360,190C3280,190,3200,190,3120,190C3040,190,2960,190,2880,190C2800,190,2720,190,2640,190C2560,190,2480,190,2400,190C2320,190,2240,190,2160,190C2080,190,2000,190,1920,190C1840,190,1760,190,1680,190C1600,190,1520,190,1440,190C1360,190,1280,190,1200,190C1120,190,1040,190,960,190C880,190,800,190,720,190C640,190,560,190,480,190C400,190,320,190,240,190C160,190,80,190,40,190L0,190Z"></path></svg>
            </div>

            <div className="w-full bg-primary-300 relative z-10 md:-my-10 lg:-my-14">
                <Container>
                    <Title
                        title="Serwer i Społeczność"
                        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
                    />

                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <div
                            data-aos="fade-right"
                            data-aos-delay="250"
                            className="lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0"
                        >
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

                                <small className="text-sm text-gray-500 font-bold">Zarejestrowanych graczy</small>
                            </div>
                        </div>

                        <div
                            data-aos="fade-left"
                            data-aos-delay="250"
                            className="lg:w-1/2 flex justify-center relative"
                        >
                            <p className="max-w-[500px] md:text-lg text-text text-center">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className="hidden lg:block absolute -bottom-20 md:top-full right-0 z-10">
                                <Image
                                    src="/img/endermite.png"
                                    width={120}
                                    height={120}
                                    alt="Endermite"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="w-full">
                <svg id="wave" style={{ transform: 'rotate(180deg)', transition: '0.3s' }} viewBox="0 0 1440 190" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(62, 6, 95, 1)" offset="0%"></stop><stop stopColor="rgba(62, 6, 95, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: 'translate(0, 0px)', opacity: 1 }} fill="url(#sw-gradient-0)" d="M0,114L40,95C80,76,160,38,240,31.7C320,25,400,51,480,53.8C560,57,640,38,720,38C800,38,880,57,960,76C1040,95,1120,114,1200,104.5C1280,95,1360,57,1440,38C1520,19,1600,19,1680,34.8C1760,51,1840,82,1920,91.8C2000,101,2080,89,2160,85.5C2240,82,2320,89,2400,76C2480,63,2560,32,2640,31.7C2720,32,2800,63,2880,72.8C2960,82,3040,70,3120,69.7C3200,70,3280,82,3360,76C3440,70,3520,44,3600,47.5C3680,51,3760,82,3840,95C3920,108,4000,101,4080,85.5C4160,70,4240,44,4320,50.7C4400,57,4480,95,4560,101.3C4640,108,4720,82,4800,69.7C4880,57,4960,57,5040,66.5C5120,76,5200,95,5280,85.5C5360,76,5440,38,5520,19C5600,0,5680,0,5720,0L5760,0L5760,190L5720,190C5680,190,5600,190,5520,190C5440,190,5360,190,5280,190C5200,190,5120,190,5040,190C4960,190,4880,190,4800,190C4720,190,4640,190,4560,190C4480,190,4400,190,4320,190C4240,190,4160,190,4080,190C4000,190,3920,190,3840,190C3760,190,3680,190,3600,190C3520,190,3440,190,3360,190C3280,190,3200,190,3120,190C3040,190,2960,190,2880,190C2800,190,2720,190,2640,190C2560,190,2480,190,2400,190C2320,190,2240,190,2160,190C2080,190,2000,190,1920,190C1840,190,1760,190,1680,190C1600,190,1520,190,1440,190C1360,190,1280,190,1200,190C1120,190,1040,190,960,190C880,190,800,190,720,190C640,190,560,190,480,190C400,190,320,190,240,190C160,190,80,190,40,190L0,190Z"></path></svg>
            </div>
        </section>
    );
}
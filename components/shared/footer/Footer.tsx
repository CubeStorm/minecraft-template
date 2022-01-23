import * as React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@components/shared/footer/Contact';
import { Socials } from '@components/shared/footer/Socials';
import { Links } from '@components/shared/footer/Links';


export const Footer: React.FC = () => {
    const CURRENT_YEAR = new Date().getFullYear();
    const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

    return (
        <footer
            data-aos="fade-up"
            data-aos-delay="100"
            className={`w-full bg-background mx-auto pt-16 px-4 md:px-24 lg:px-8`}
        >
            <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4" >
                <div className="sm:col-span-2">
                    <Link href="/">
                        <a
                            aria-label="Przekierowanie do strony głównej"
                            title={APP_NAME}
                            className="text-xl text-text font-bold tracking-wide uppercase ml-2"
                        > {APP_NAME} </a>
                    </Link>

                    <div className="lg:max-w-sm text-sm text-gray-500 mt-6">
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam.
                        </p>

                        <p className="mt-4">
                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>

                <Contact />

                <Socials />
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-between relative border-t py-5">
                <p className="text-sm text-gray-500">
                    © Copyright {CURRENT_YEAR} {APP_NAME}. Wszelkie prawa zastrzeżone.
                </p>

                <Links />

                <div className="absolute -top-20 right-5 md:right-36 z-10">
                    <Image
                        src="/img/endermite.png"
                        width="120"
                        height="120"
                        alt="Endermite"
                    />
                </div>
            </div>
        </footer>
    );
}
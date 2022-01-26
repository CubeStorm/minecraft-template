import * as React from 'react';

import { Container } from '@components/Container';
import { Player } from '@components/sections/ranking/Player';
import { Title } from '@components/sections/Title';
import Image from 'next/image';


export const Ranking: React.FC = () => {
    return (
        <div className="w-full my-10 md:my-6 lg:my-2">
            <Container>
                <Title
                    title="Najlepsi z Najlepszych"
                    description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
                />

                <div className="grid gap-10 lg:grid-cols-2">
                    <div
                        data-aos="fade-right"
                        data-aos-delay="850"
                        className="lg:pr-32"
                    >

                        <div className="w-full flex flex-col items-center gap-y-2 relative z-10">
                            <Player i={1} name="CubeStorm" points={10000} />
                            <Player i={2} name="CubeStorm" points={10000} />
                            <Player i={3} name="CubeStorm" points={10000} />
                            <Player i={4} name="CubeStorm" points={10000} />
                            <Player i={5} name="CubeStorm" points={10000} />
                            <Player i={6} name="CubeStorm" points={10000} />
                            <Player i={6} name="CubeStorm" points={10000} />
                            <Player i={7} name="CubeStorm" points={10000} />
                            <Player i={8} name="CubeStorm" points={10000} />
                            <Player i={10} name="MichałPierdzidu" points={10000} />
                        </div>
                    </div>

                    <div
                        data-aos="fade-left"
                        data-aos-delay="850"
                        className="flex items-center justify-center"
                    >
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
            </Container >
        </div >
    );
}
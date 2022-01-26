import * as React from 'react';

import Image from 'next/image';
import { Container } from '@components/Container';
import { Title } from '@components/sections/Title';
import { Member } from '@components/sections/team/Member';


export const Team: React.FC = () => {
    return (
        <section className="w-full relative">
            <div className="absolute bottom-52 md:bottom-0 left-0 z-0 opacity-30">
                <Image
                    width="1920"
                    height="800"
                    src="/img/line-wave.svg"
                    alt="Wave"
                    className=""
                />
            </div>

            <div className="lg:hidden absolute top-64 left-0 z-0 opacity-30">
                <Image
                    width="1920"
                    height="800"
                    src="/img/line-wave.svg"
                    alt="Wave"
                    className=""
                />
            </div>

            <Container>
                <Title
                    title="Doświadczony Zespół"
                    description="Jeśli potrzebujesz pomocy lub czujesz potrzebę, aby nam o czymś powiedzieć nie wahaj się! Kliknij w główkę wybranego administratora, aby się z nim skontaktować"
                />

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="lg:max-w-screen-lg grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 relative z-10 mx-auto"
                >
                    <Member
                        name="Jan Kowalski"
                        nick="CubeStorm"
                        rank="Web Developer"
                    />

                    <Member
                        name="Michał pierdziduoa"
                        nick="CubeStorm"
                        rank="Web Developer"
                    />

                    <Member
                        name="Jan Kowalski"
                        nick="CubeStorm"
                        rank="Web Developer"
                    />

                    <Member
                        name="Jan Kowalski"
                        nick="CubeStorm"
                        rank="Web Developer"
                    />

                    <Member
                        name="Jan Kowalski"
                        nick="CubeStorm"
                        rank="Web Developer"
                    />

                    <Member
                        name="Jan Kowalski"
                        nick="CubeStorm"
                        rank="Web Developer"
                    />

                    <Member
                        name="Jan Kowalski"
                        nick="CubeStorm"
                        rank="Web Developer"
                    />

                    <Member
                        name="Jan Kowalski"
                        nick="CubeStorm"
                        rank="Web Developer"
                    />

                    <Member
                        name="Jan Kowalski"
                        nick="CubeStorm"
                        rank="Web Developer"
                    />

                    <Member
                        name="Jan Kowalski"
                        nick="CubeStorm"
                        rank="Web Developer"
                    />
                </div>
            </Container>
        </section>
    );
}
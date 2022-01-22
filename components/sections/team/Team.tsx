import * as React from 'react';

import { Container } from '@components/Container';
import { Title } from '@components/sections/Title';
import { Member } from '@components/sections/team/Member';


export const Team: React.FC = () => {
    return (
        <section className="w-full">
            <Container>
                <Title
                    title="Doświadczony Zespół"
                    description="Jeśli potrzebujesz pomocy lub czujesz potrzebę, aby nam o czymś powiedzieć nie wahaj się! Kliknij w główkę wybranego administratora, aby się z nim skontaktować"
                />

                <div className="lg:max-w-screen-lg grid gap-10 sm:grid-cols-2 lg:grid-cols-5 mx-auto">
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
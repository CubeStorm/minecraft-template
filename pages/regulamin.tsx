import * as React from 'react';

import Head from 'next/head';
import { Header } from '@components/sections/statute/Header';
import { Container } from '@components/Container';

import type { NextPage } from 'next';
import { LastUpdate } from '@components/sections/statute/LastUpdate';


const Statute: NextPage = () => {
    return (
        <div className="w-full">
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} ● Regulamin</title>
            </Head>

            <Container>
                <Header
                    id={1}
                    name="Lorem ipsum 1"
                    paragraphs={[
                        { id: 1, name: 'Lorem ipsum dolor sit amet consectetur' },
                        { id: 2, name: 'Lorem ipsum dolor sit amet consectetur' },
                        { id: 3, name: 'Lorem ipsum dolor sit amet consectetur' },
                    ]}
                />

                <Header
                    id={2}
                    name="Lorem ipsum 2"
                    paragraphs={[
                        { id: 4, name: 'Lorem ipsum dolor sit amet consectetur' },
                        { id: 5, name: 'Lorem ipsum dolor sit amet consectetur' },
                        { id: 6, name: 'Lorem ipsum dolor sit amet consectetur' },
                    ]}
                />

                <Header
                    id={3}
                    name="Lorem ipsum 3"
                    paragraphs={[
                        { id: 7, name: 'Lorem ipsum dolor sit amet consectetur' },
                        { id: 8, name: 'Lorem ipsum dolor sit amet consectetur' },
                        { id: 9, name: 'Lorem ipsum dolor sit amet consectetur' },
                    ]}
                />

                <Header
                    id={4}
                    name="Lorem ipsum 4"
                    paragraphs={[
                        { id: 10, name: 'Lorem ipsum dolor sit amet consectetur' },
                        { id: 11, name: 'Lorem ipsum dolor sit amet consectetur' },
                        { id: 12, name: 'Lorem ipsum dolor sit amet consectetur' },
                    ]}
                />

                <LastUpdate date="10-10-2022" />
            </Container>
        </div>
    );
}

export default Statute;
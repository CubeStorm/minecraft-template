import * as React from 'react';

import Head from 'next/head';
import { Faq as FaqSection } from '@components/sections/faq/Faq';

import type { NextPage } from 'next';


const Faq: NextPage = () => {
    return (
        <div className="w-full min-h-screen">
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} ● Faq</title>
            </Head>

            <FaqSection />
        </div>
    )
}

export default Faq;

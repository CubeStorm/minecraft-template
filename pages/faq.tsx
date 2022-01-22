import * as React from 'react';

import { Faq as FaqSection } from '@components/sections/faq/Faq';

import type { NextPage } from 'next';


const Faq: NextPage = () => {
    return (
        <div className="w-full min-h-screen">
            <FaqSection />
        </div>
    )
}

export default Faq;

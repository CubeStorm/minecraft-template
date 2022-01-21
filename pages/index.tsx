import * as React from 'react';

import { About } from '@components/sections/about/About';
import { Hero } from '@components/shared/hero/Hero';

import type { NextPage } from 'next';
import { Team } from '@components/sections/team/Team';


const Home: NextPage = () => {
    return (
        <div className="w-full h-[2000px]">
            <Hero />

            <About />
            <Team />
        </div>
    )
}

export default Home;

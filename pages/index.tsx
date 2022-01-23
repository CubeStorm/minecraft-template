import * as React from 'react';

import { About } from '@components/sections/about/About';
import { Team } from '@components/sections/team/Team';
import { Hero } from '@components/shared/hero/Hero';

import type { NextPage } from 'next';


const Home: NextPage = () => {
    return (
        <div className="w-full">
            <Hero />

            <About />
            <Team />
        </div>
    )
}

export default Home;

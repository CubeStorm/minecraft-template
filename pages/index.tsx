import * as React from 'react';

import { Hero } from '@components/shared/hero/Hero';
import { About } from '@components/sections/about/About';
import { Ranking } from '@components/sections/ranking/Ranking';
import { Team } from '@components/sections/team/Team';

import type { NextPage } from 'next';


const Home: NextPage = () => {
    return (
        <div className="w-full">
            <Hero />

            <About />
            <Ranking />
            <Team />
        </div>
    )
}

export default Home;

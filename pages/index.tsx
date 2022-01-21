import { Hero } from '@components/shared/hero/Hero';
import type { NextPage } from 'next';


const Home: NextPage = () => {
    return (
        <div className="w-full h-[2000px]">
            <Hero />
        </div>
    )
}

export default Home;

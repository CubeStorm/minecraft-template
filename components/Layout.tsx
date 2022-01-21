import * as React from 'react';
import { ReactNode } from 'react';

import { Nav } from '@components/shared/nav/Nav';
import { Footer } from '@components/shared/footer/Footer';


interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-background">
            <Nav />

            <main className="w-full pt-16">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout;
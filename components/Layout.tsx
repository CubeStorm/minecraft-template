import * as React from 'react';
import { ReactNode } from 'react';

import { Nav } from '@components/shared/nav/Nav';
import { Footer } from '@components/shared/footer/Footer';
import { Alerts } from '@components/shared/alerts/Alerts';
import { VoucherModal } from './modals/VoucherModal';


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

            <Alerts />
            <VoucherModal />
        </div>
    )
}

export default Layout;
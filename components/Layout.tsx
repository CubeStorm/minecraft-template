import * as React from 'react';

import { Nav } from '@components/shared/nav/Nav';
import { Footer } from '@components/shared/footer/Footer';
import { Alerts } from '@components/shared/alerts/Alerts';
import { VoucherModal } from '@components/modals/VoucherModal';
import { LoginModal } from '@components/modals/LoginModal';


const Layout: React.FC = ({ children }) => {
    return (
        <div className="min-h-screen relative bg-background" >
            <Nav />

            <main className="w-full pt-16">
                {children}
            </main>

            <Footer />

            <Alerts />
            <VoucherModal />
            <LoginModal />
        </div>
    )
}

export default Layout;
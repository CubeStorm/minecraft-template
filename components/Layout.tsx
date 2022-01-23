import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import { useRouter } from 'next/router';

import { Nav } from '@components/shared/nav/Nav';
import { Footer } from '@components/shared/footer/Footer';
import { Alerts } from '@components/shared/alerts/Alerts';
import { VoucherModal } from '@components/modals/VoucherModal';
import { LoginModal } from '@components/modals/LoginModal';


const Layout: React.FC = ({ children }) => {
    const [windowHeight, setWindowHeight] = useState(0);
    const [rootHeight, setRootHeight] = useState(0);
    const [footerParentHeight, setFooterParentHeight] = useState(0);

    const { pathname } = useRouter();

    const rootRef = useRef<HTMLDivElement>(null);
    const footerParentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setWindowHeight(window.innerHeight);
        setRootHeight(rootRef.current?.scrollHeight ?? 0);
        setFooterParentHeight(footerParentRef.current?.scrollHeight ?? 0);
    }, [pathname]);


    return (
        <div
            ref={rootRef}
            className="min-h-screen relative bg-background"
        >
            <Nav />

            <main className="w-full pt-16">
                {children}
            </main>

            <div
                ref={footerParentRef}
                className={`w-full absolute ${(rootHeight > windowHeight) ? `-bottom-[${footerParentHeight}px]` : 'bottom-0'} left-0`}
            >
                <Footer />
            </div>

            <Alerts />
            <VoucherModal />
            <LoginModal />
        </div>
    )
}

export default Layout;
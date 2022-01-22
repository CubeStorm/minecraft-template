import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

import { Logo } from '@components/shared/nav/Logo';
import { Open } from '@components/shared/nav/Open';
import { NavBar } from '@components/shared/nav/NavBar';
import { MobileNavBar } from '@components/shared/nav/MobileNavBar';
import { Button } from '@components/shared/Button';

import { RootState } from '@redux/store';
import { toggleActive } from '@redux/slices/LoginModalSlice';


export const Nav: React.FC = () => {
    const { isActive } = useAppSelector((store: RootState) => store.nav);
    const dispatch = useAppDispatch();

    return (
        <nav className="w-full h-16 fixed top-0 left-0 z-40 shadow-sm backdrop-blur-sm">
            <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto py-5 px-4 md:px-24 lg:px-8">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center">
                        <Logo />

                        <ul className="hidden lg:flex items-center space-x-8">
                            <NavBar />
                        </ul>
                    </div>

                    <div className="hidden lg:flex items-center">
                        <Button
                            title="Zaloguj"
                            ariaLabel="Logowanie do konta gracza"
                            handleClick={() => dispatch(toggleActive(true))}
                        />
                    </div>

                    <div className="lg:hidden">
                        <Open />

                        {isActive && <MobileNavBar />}
                    </div>
                </div>
            </div>
        </nav>
    );
}
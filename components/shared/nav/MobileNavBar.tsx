import * as React from 'react';
import { useAppDispatch } from '@redux/hooks';

import { Close } from '@components/shared/nav/Close';
import { Logo } from '@components/shared/nav/Logo';
import { NavBar } from '@components/shared/nav/NavBar';
import { Button } from '@components/shared/Button';

import { toggleActive } from '@redux/slices/NavigationSlice';
import { toggleActive as toggleActiveLoginModal } from '@redux/slices/LoginModalSlice';


export const MobileNavBar: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleShowLoginModal = () => {
        dispatch(toggleActiveLoginModal(true))
        dispatch(toggleActive(false));
    }


    return (
        <div
            className="w-full h-screen fixed top-0 left-0 bg-backgroundOverlay p-3"
            onClick={() => dispatch(toggleActive(false))}
        >
            <div
                className="max-w-lg bg-background rounded-md shadow-sm mx-auto p-2 md:p-5"
                onClick={event => event.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <Logo mobile={true} />
                    </div>

                    <div>
                        <Close />
                    </div>
                </div>

                <ul className="space-y-4">
                    <NavBar mobile={true} />

                    <li>
                        <Button
                            title="Zaloguj"
                            ariaLabel="Logowanie do konta gracza"
                            styles="min-w-full mt-5"
                            handleClick={handleShowLoginModal}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}
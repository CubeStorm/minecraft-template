import * as React from 'react';
import { useAppDispatch } from '@redux/hooks';

import { Close } from '@components/shared/nav/Close';
import { Logo } from '@components/shared/nav/Logo';
import { NavBar } from '@components/shared/nav/NavBar';

import { toggleActive } from '@redux/slices/NavigationSlice';


export const MobileNavBar: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div
            className="w-full h-screen fixed top-0 left-0 bg-backgroundOverlay p-3"
            onClick={() => dispatch(toggleActive(false))}
        >
            <div
                className="bg-background rounded-md shadow-sm p-5"
                onClick={event => event.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <Logo />
                    </div>

                    <div>
                        <Close />
                    </div>
                </div>

                <ul className="space-y-4">
                    <NavBar mobile={true} />
                </ul>
            </div>
        </div>
    );
}
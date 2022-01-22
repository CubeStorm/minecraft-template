import * as React from 'react';
import { useAppDispatch } from '@redux/hooks';

import { NavItem } from '@components/shared/nav/NavItem';

import { toggleActive } from '@redux/slices/VoucherModalSlice';


interface NavBarProps {
    mobile?: boolean
}

export const NavBar: React.FC<NavBarProps> = ({ mobile = false }) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <NavItem name="Główna" path="/" mobile={mobile} />
            <NavItem name="Sklep" path="/sklep" mobile={mobile} />
            <NavItem name="Voucher" path="/voucher" mobile={mobile} handler={() => dispatch(toggleActive(true))} />
            <NavItem name="Regulamin" path="/regulamin" mobile={mobile} />
        </>
    );
}
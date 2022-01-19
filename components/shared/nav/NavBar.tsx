import * as React from 'react';

import { NavItem } from '@components/shared/nav/NavItem';


interface NavBarProps {
    mobile?: boolean
}

export const NavBar: React.FC<NavBarProps> = ({ mobile = false }) => {
    return (
        <>
            <NavItem name="Główna" path="/" mobile={mobile} />
            <NavItem name="Sklep" path="/sklep" mobile={mobile} />
            <NavItem name="Voucher" path="/voucher" mobile={mobile} />
            <NavItem name="Regulamin" path="/regulamin" mobile={mobile} />
        </>
    );
}
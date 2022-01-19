import * as React from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@redux/hooks';

import Link from 'next/link';

import { toggleActive } from '@redux/slices/NavigationSlice';


interface NavItemProps {
    name: string,
    path: string,
    mobile: boolean
}

export const NavItem: React.FC<NavItemProps> = ({ name, path, mobile }) => {
    const { route } = useRouter();
    const dispatch = useAppDispatch();

    return (
        <li className="relative group">
            <Link href={path}>
                <a
                    aria-label={name}
                    title={name}
                    className="text-gray-100 font-medium tracking-wide"
                    onClick={() => dispatch(toggleActive(false))}
                > {name} </a>
            </Link>

            <div className={`w-1/4 
                ${(path === route)
                    ? `${mobile ? 'w-1/3' : 'w-2/3'}`
                    : `${mobile ? 'w-0' : 'group-hover:w-2/3'} opacity-70 group-hover:opacity-100`}
                h-1 absolute -bottom-1.5 left-0 bg-primary-100 transition-all duration-[180ms] ease-in-out`}></div>
        </li >
    );
}
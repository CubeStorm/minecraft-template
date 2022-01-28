import * as React from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@redux/hooks';

import Link from 'next/link';

import { toggleActive } from '@redux/slices/NavigationSlice';


interface NavItemProps {
    name: string,
    path: string,
    mobile: boolean,
    handler?: (arg?: any) => void
}

export const NavItem: React.FC<NavItemProps> = ({ name, path, mobile, handler }) => {
    const { route } = useRouter();
    const dispatch = useAppDispatch();

    const handleClick = () => {
        handler && handler();
        mobile && toggleActive(false);
    }

    return (
        <li className="relative group">
            {handler ? (
                <button
                    aria-label={name}
                    title={name}
                    className="text-gray-100 font-medium tracking-wide"
                    onClick={handleClick}
                >{name}</button>
            ) : (
                <Link href={path}>
                    <a
                        aria-label={name}
                        title={name}
                        className="text-gray-100 font-medium tracking-wide"
                        onClick={() => dispatch(toggleActive(false))}
                    > {name} </a>
                </Link>
            )}

            <div className={`${(path === route)
                ? `${mobile ? 'w-[60px]' : 'w-[40px]'}`
                : `${mobile ? 'w-0' : 'w-[10px] group-hover:w-[40px]'} opacity-70 group-hover:opacity-100`}
                    h-1 absolute -bottom-1.5 left-0 bg-primary-100 transition-all duration-[180ms] ease-out`}
            >
            </div>
        </li>
    );
}
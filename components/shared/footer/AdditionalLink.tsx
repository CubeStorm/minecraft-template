import * as React from 'react';

import Link from 'next/link';


interface LinkProps {
    name: string,
    path: string,
    ariaLabel: string,
    target?: string,
    passHref?: boolean
}

export const AdditionalLink: React.FC<LinkProps> = ({ name, path, ariaLabel, target = '', passHref = false }) => {
    return (
        <li>
            <Link
                href={path}
                passHref={passHref}
            >
                <a
                    className="text-gray-500 hover:text-primary-100 transition-colors"
                    aria-label={ariaLabel}
                    title={ariaLabel}
                    target={target}
                > {name} </a>
            </Link>
        </li>
    );
}
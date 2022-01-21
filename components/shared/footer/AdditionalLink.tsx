import * as React from 'react';

import Link from 'next/link';


interface LinkProps {
    name: string,
    path: string
}

export const AdditionalLink: React.FC<LinkProps> = ({ name, path }) => {
    return (
        <li>
            <Link href={path} >
                <a className="text-gray-500 hover:text-primary-100 transition-colors">
                    {name}
                </a>
            </Link>
        </li>
    );
}
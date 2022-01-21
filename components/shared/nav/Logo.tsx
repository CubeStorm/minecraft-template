import * as React from 'react';

import Link from 'next/link';


export const Logo: React.FC = () => {
    const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

    return (
        <Link href="/">
            <a
                aria-label={APP_NAME}
                title={APP_NAME}
                className="items-center mr-8"
            >
                <h1 className="text-xl text-text font-bold tracking-wide uppercase ml-2">
                    {APP_NAME}
                </h1>
            </a>
        </Link>
    );
}
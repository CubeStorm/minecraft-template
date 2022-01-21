import * as React from 'react';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';


interface SocialLinkProps {
    path: string,
    icon: IconDefinition
}

export const SocialLink: React.FC<SocialLinkProps> = ({ path, icon }) => {
    return (
        <Link href={path} passHref={true}>
            <a
                target="_blank"
                className="text-gray-500 hover:text-primary-200 transition-colors"
            >
                <FontAwesomeIcon
                    icon={icon}
                    className="text-xl"
                />
            </a>
        </Link>
    );
}
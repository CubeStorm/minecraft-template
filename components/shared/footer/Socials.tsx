import * as React from 'react';

import { SocialLink } from '@components/shared/footer/SocialLink';
import { faDiscord, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


export const Socials: React.FC = () => {
    return (
        <div>
            <span className="text-text font-bold tracking-wide">
                Społeczności
            </span>

            <div className="flex items-center space-x-3 my-2">
                <SocialLink
                    path="https://facebook.com/"
                    icon={faFacebook}
                />

                <SocialLink
                    path="https://instagram.com/"
                    icon={faInstagram}
                />

                <SocialLink
                    path="https://discord.com/"
                    icon={faDiscord}
                />
            </div>

            <p className="text-sm text-gray-500">
                Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
                spare ribs salami.
            </p>
        </div>
    );
}
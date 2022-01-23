import * as React from 'react';

import { AdditionalLink } from '@components/shared/footer/AdditionalLink';


export const Links: React.FC = () => {
    return (
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5 mb-3 lg:mb-0">
            <AdditionalLink
                name="Regulamin"
                path="/regulamin"
                ariaLabel="Przekierowanie do regulaminu"
            />

            <AdditionalLink
                name="Faq"
                path="/faq"
                ariaLabel="Przekierowanie do faq"
            />

            <AdditionalLink
                name="Twórca"
                path="https://www.mpcforum.pl/topic/1670271-twoja-wlasna-strona-www/"
                ariaLabel="Przekierowanie do twórcy strony"
                passHref={true}
                target="_blank"
            />
        </ul>
    );
}
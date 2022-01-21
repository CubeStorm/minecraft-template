import * as React from 'react';

import { AdditionalLink } from '@components/shared/footer/AdditionalLink';


export const Links: React.FC = () => {
    return (
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5 mb-3 lg:mb-0">
            <AdditionalLink
                name="Regulamin"
                path="/regulamin"
            />

            <AdditionalLink
                name="Faq"
                path="/faq"
            />

            <AdditionalLink
                name="Autor"
                path="/"
            />
        </ul>
    );
}
import * as React from 'react';


export const Contact: React.FC = () => {
    return (
        <div className="space-y-2 text-sm">
            <p className="text-text font-bold tracking-wide">
                Kontakt
            </p>

            <div className="flex">
                <p className="mr-3 text-gray-500">Telefon:</p>

                <a
                    href="tel:850-123-5021"
                    aria-label="Kontakt telefoniczny"
                    title="Kontakt telefoniczny"
                    className="text-gray-500 hover:text-primary-100 transition-colors"
                >850-123-5021</a>
            </div>

            <div className="flex">
                <p className="mr-3 text-gray-500">Email:</p>

                <a
                    href="mailto:info@lorem.mail"
                    aria-label="Adres Email"
                    title="Adres Email"
                    className="text-gray-500 hover:text-primary-100 transition-colors"
                >info@lorem.mail</a>
            </div>

            <div className="flex">
                <p className="mr-3 text-gray-500">Discord:</p>

                <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kontakt discord"
                    title="Kontakt discord"
                    className="text-gray-500 hover:text-primary-100 transition-colors"
                >Discord</a>
            </div>
        </div>
    );
}
import * as React from 'react';
import { useState } from 'react';


interface ItemProps {
    title: string
}

export const Item: React.FC<ItemProps> = ({ title, children }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            data-aos="fade-up"
            data-aos-delay="500"
            className={`w-full border-b ${isActive ? 'border-b-primary-200' : 'border-b-text'} transition-colors overflow-y-hidden`}
        >
            <button
                type="button"
                aria-label="Pokaż odpowiedź"
                title="Pokaż odpowiedź"
                className="h-16 flex items-center justify-between w-full p-2 focus:outline-none"
                onClick={() => setIsActive(!isActive)}
            >
                <p className="text-lg text-text font-medium">{title}</p>

                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-500 transform transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {isActive && (
                <div className="p-4 pt-0">
                    <p className="text-gray-500">{children}</p>
                </div>
            )}
        </div>
    );
}
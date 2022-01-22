import * as React from 'react';


interface TitleProps {
    title: string,
    description?: string
}

export const Title: React.FC<TitleProps> = ({ title, description }) => {
    return (
        <div className="max-w-xl lg:max-w-2xl text-center mb-12 md:mx-auto">
            <h3 className="max-w-lg text-3xl sm:text-4xl text-text font-bold tracking-tight mb-4 md:mx-auto">
                {title}
            </h3>

            {description && (
                <p className="text-sm lg:text-base text-gray-600">
                    {description}
                </p>
            )}
        </div>
    );
}
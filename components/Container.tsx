import * as React from 'react';


interface ContainerProps {
    styles?: string
}

export const Container: React.FC<ContainerProps> = ({ styles, children }) => {
    return (
        <div className={`sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex flex-col overflow-hidden mx-auto px-4 py-2 md:py-5 lg:py-8 md:px-24 lg:px-8 ${styles}`}>
            {children}
        </div>
    );
}
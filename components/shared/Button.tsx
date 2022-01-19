import * as React from 'react';


interface ButtonProps {
    title: string,
    ariaLabel: string,
    styles?: string,
    handleClick?: React.MouseEventHandler
}

export const Button: React.FC<ButtonProps> = ({ title, ariaLabel, styles, handleClick = () => console.log('Nothing happened...') }) => {
    return (
        <button
            aria-label={ariaLabel}
            title={ariaLabel}
            onClick={handleClick}
            className={`btn rounded-sm px-5 py-2 ${styles}`}
        >
            <span> {title} </span>
        </button>
    );
}
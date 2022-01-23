import * as React from 'react';
import { useState } from 'react';

import { Paragraph } from '@components/sections/statute/Paragraph';

import type { HeaderType } from '@ctypes/features/statute/HeaderType';

import styles from '@styles/statute.module.css';


interface HeaderProps extends HeaderType { }

export const Header: React.FC<HeaderProps> = ({ name, paragraphs }) => {
    const [isActive, setIsActive] = useState(false);

    const handleToggleActive = (event: any) => {
        setIsActive(isActive => !isActive);

        const panel = event.target.nextElementSibling;

        panel.style.maxHeight = panel.style.maxHeight
            ? null
            : panel.scrollHeight + "px";
    }

    const ParagraphsComponent = paragraphs.map(({ id, name }, i) => (
        <Paragraph
            key={id}
            name={name}
            i={i}
        />
    ));

    return (
        <div className="flex flex-col">
            <h5
                className={styles.statuteHeader + `${isActive ? ' active' : ''} md:text-xl text-gray-100 font-bold uppercase cursor-pointer`}
                onClick={handleToggleActive}
            >{name}</h5>

            <div className={styles.statuteContent + ' transition-all my-2'}>
                {ParagraphsComponent}
            </div>
        </div>
    );
}
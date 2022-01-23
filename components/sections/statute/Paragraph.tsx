import * as React from 'react';

import type { ParagraphType } from '@ctypes/features/statute/ParagraphType';


interface ParagraphProps extends ParagraphType {
    i: number,
}

export const Paragraph: React.FC<ParagraphProps> = ({ i, name }) => {
    return (
        <p className="flex">
            <span className="text-primary-200 font-bold mr-2">§{++i}.</span>
            <span className="text-sm md:text-base text-gray-500">{name}</span>
        </p>
    );
}
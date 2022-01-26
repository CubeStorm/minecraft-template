import * as React from 'react';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


interface PlayerProps {
    i: number,
    name: string,
    points: number
}

export const Player: React.FC<PlayerProps> = ({ i, name, points }) => {
    const textColor = i == 1 ? 'text-yellow-600' : 'text-gray-600';

    return (
        <div className={`w-full max-w-[350px] flex items-center text-sm md:text-base border-2 border-primary-300 ${i == 1 ? 'opacity-100' : 'opacity-70 hover:opacity-100'} rounded-sm hover:-translate-y-1 transition-all duration-500 ease cursor-pointer`}>
            <div className="w-[42px] flex justify-center">
                <span className={`${textColor} font-bold px-3`}>
                    {i == 1 ?
                        <FontAwesomeIcon
                            icon={faTrophy}
                            className="text-xl text-yellow-600"
                        />
                        : i}
                </span>
            </div>

            <div className="h-[44px] relative pr-2">
                <Image
                    src="https://minotar.net/avatar/user.png"
                    width="44"
                    height="44"
                    title={name}
                    aria-label={name}
                    alt={name}
                />
            </div>

            <div className="pl-2">
                <span className={`${textColor} font-bold`}>{name}</span>
            </div>

            <div className="ml-auto px-4">
                <span className={`${textColor} font-bold`}>{points}</span>
            </div>
        </div>
    );
}
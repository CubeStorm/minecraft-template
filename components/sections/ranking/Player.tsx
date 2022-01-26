import * as React from 'react';


interface PlayerProps {
    i: number,
    name: string,
    points: number
}

export const Player: React.FC<PlayerProps> = ({ i, name, points }) => {
    const textColor = i == 1 ? 'text-yellow-600' : 'text-gray-600';

    return (
        <div className="w-full max-w-[350px] flex text-text border-2 border-primary-300 rounded-sm hover:-translate-y-1 transition-transform duration-500 ease cursor-pointer p-2">
            <div className="pl-2 pr-4">
                <span className={`${textColor} font-bold`}>{i}</span>
            </div>

            <div className="px-2">
                <span className={`${textColor} font-bold`}>{name}</span>
            </div>

            <div className="ml-auto px-2">
                <span className={`${textColor} font-bold`}>{points}</span>
            </div>
        </div>
    );
}
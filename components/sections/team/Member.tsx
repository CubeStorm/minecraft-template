import * as React from 'react';

import Image from 'next/image';


interface MemberProps {
    name: string,
    nick: string,
    rank: string
}

export const Member: React.FC<MemberProps> = ({ name, nick, rank }) => {
    return (
        <div className="group flex flex-col items-center cursor-pointer">
            <Image
                src={`https://minotar.net/avatar/${nick}`}
                width={64}
                height={64}
                alt={nick}
                title={nick}
                className="group-hover:scale-[0.90] group-active:scale-[1.10] transition-transform rounded-sm shadow mb-2"
            />

            <div className="flex flex-col items-center mt-2">
                <p className="text-lg text-text font-bold">{name}</p>
                <p className="text-sm text-gray-600 font-bold">{rank}</p>
            </div>
        </div>
    );
}
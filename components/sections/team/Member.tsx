import * as React from 'react';

import Image from 'next/image';


interface MemberProps {
    name: string,
    nick: string,
    rank: string
}

export const Member: React.FC<MemberProps> = ({ name, nick, rank }) => {
    return (
        <div className="flex flex-col items-center">
            <Image
                src={`https://minotar.net/avatar/${nick}`}
                width={72}
                height={72}
                alt={nick}
                title={nick}
                className="mb-2 rounded-sm shadow"
            />

            <div className="flex flex-col items-center mt-2">
                <p className="text-lg text-text font-bold">{name}</p>
                <p className="text-sm text-gray-600 font-bold">{rank}</p>
            </div>
        </div>
    );
}
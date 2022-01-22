import * as React from 'react';

import Image from 'next/image';


interface MemberProps {
    name: string,
    nick: string,
    rank: string
}

export const Member: React.FC<MemberProps> = ({ name, nick, rank }) => {
    return (
        <div className="group w-[100px] md:w-[168px] flex flex-col items-center cursor-pointer">
            <div className="w-[50px] h-[50px] md:w-[64px] md:h-[64px] relative">
                <Image
                    src={`https://minotar.net/avatar/${nick}`}
                    layout="fill"
                    alt={nick}
                    title={nick}
                    className="group-hover:scale-[0.90] group-active:scale-[1.10] transition-transform rounded-sm shadow mb-2"
                />
            </div>

            <div className="flex flex-col items-center mt-2">
                <p className="md:text-lg text-text text-center font-bold">{name}</p>
                <p className="text-xs md:text-sm text-gray-600 text-center font-bold">{rank}</p>
            </div>
        </div>
    );
}
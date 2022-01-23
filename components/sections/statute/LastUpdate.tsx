import * as React from 'react';


interface LastUpdateProps {
    date: string
}

export const LastUpdate: React.FC<LastUpdateProps> = ({ date }) => {
    return (
        <div className="w-full flex justify-end mt-10">
            <div className="flex flex-col items-center border-b-4 border-b-primary-100 pb-3 px-8">
                <span className="text-text font-bold">{date}</span>
                <span className="text-xs text-gray-500 font-bold tracking-wide">Ostatnia aktualizacja</span>
            </div>
        </div>
    );
}
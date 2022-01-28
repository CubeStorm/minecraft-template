import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


interface ModalProps {
    isActive: boolean,
    title: string,
    handleClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ isActive, title, handleClose, children }) => {
    return (
        <div className={`w-full h-full flex items-center justify-center fixed top-0 left-0 z-40 transition-all ${isActive || 'opacity-0 pointer-events-none'}`}>
            <div
                className="w-full h-full absolute bg-backgroundOverlay"
                onClick={handleClose}
            ></div>

            <div className="bg-backgroundSecondary w-11/12 md:max-w-md mx-auto rounded shadow-lg z-40 overflow-y-auto">
                <div className="text-left p-2 md:p-4 lg:p-6">
                    <div className="flex justify-between items-center">
                        <p className="text-lg md:text-2xl text-text font-bold mb-4 ml-2">{title}</p>

                        <div
                            className="cursor-pointer z-50 ml-auto"
                            onClick={handleClose}
                        >
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-500"
                            />
                        </div>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
}
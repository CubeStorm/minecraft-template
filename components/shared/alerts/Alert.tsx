import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useAppDispatch } from '@redux/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

import { remove } from '@redux/slices/AlertsSlice';

import { AlertType } from '@ctypes/features/AlertType';


interface AlertProps extends AlertType { };

export const Alert: React.FC<AlertProps> = ({ id, title, content }) => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useAppDispatch();

    const handleClose = useCallback(() => {
        setIsActive(false);

        setTimeout(() => {
            dispatch(remove(id));
        }, 350);
    }, [dispatch, id]);

    useEffect(() => {
        setIsActive(true);

        setTimeout(() => {
            handleClose();
        }, 3000);
    }, [handleClose]);


    return (
        <div className={`w-[320px] flex items-center gap-4 bg-black transform ${isActive ? 'translate-x-0' : '-translate-x-[320px]'} transition-transform duration-300 p-2`}>
            <div className="flex justify-center items-center">
                <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="text-xl text-primary-300"
                />
            </div>

            <div className="flex flex-col justify-center">
                <p className="text-sm text-text font-bold m-0">{title}</p>
                <span className="text-xs text-gray-500 font-medium">{content}</span>
            </div>

            <div className="flex justify-center items-center">
                <button
                    className="focus:outline-none"
                    aria-label="Zamknij alert"
                    title="Zamknij alert"
                    onClick={handleClose}
                >
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="text-red-500"
                    />
                </button>
            </div>
        </div>
    );
}
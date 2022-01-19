import * as React from 'react';
import { useAppDispatch } from '@redux/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { toggleActive } from '@redux/slices/NavigationSlice';


export const Close: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <button
            aria-label="Zamknij nawigacje"
            title="Zamknij nawigacje"
            className="focus:outline-none focus:shadow-outline p-2"
            onClick={() => dispatch(toggleActive(false))}
        >
            <FontAwesomeIcon
                icon={faTimes}
                className="text-text text-2xl"
            />
        </button>
    );
}
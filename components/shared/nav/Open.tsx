import * as React from 'react';
import { useAppDispatch } from '@redux/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { toggleActive } from '@redux/slices/NavigationSlice';


export const Open: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <button
            aria-label="Otwórz nawigacje"
            title="Otwórz nawigacje"
            className="focus:outline-none focus:shadow-outline p-2"
            onClick={() => dispatch(toggleActive(true))}
        >
            <FontAwesomeIcon
                icon={faBars}
                className="text-text text-2xl"
            />
        </button>
    );
}
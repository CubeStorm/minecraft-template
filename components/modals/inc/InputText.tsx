import * as React from 'react';

import { ErrorMessage } from 'formik';


interface InputTextProps {
    name: string,
    type?: string,
    value: string,
    label: string,
    handleChange: (event: React.ChangeEvent) => void,
    handleBlur: (event: React.FocusEvent) => void,
}

export const InputText: React.FC<InputTextProps> = ({
    name,
    type = 'text',
    value,
    label,
    handleChange,
    handleBlur
}) => {
    return (
        <div className="flex flex-col">
            <label className="text-xs text-gray-500 font-bold">{label}</label>

            <input
                type={type}
                name={name}
                value={value}
                autoComplete="off"
                className="w-full h-10 flex items-center bg-backgroundSecondary text-text border-b-2 border-b-primary-300 focus:border-b-primary-100 focus:outline-none my-2 px-2"
                onChange={event => handleChange(event)}
                onBlur={event => handleBlur(event)}
            />

            <ErrorMessage name={name}>
                {error => <span className="text-xs text-red-500 text-right font-bold">{error}</span>}
            </ErrorMessage>
        </div>
    );
}
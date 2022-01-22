import { ErrorMessage } from 'formik';
import * as React from 'react';


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
        <div className="flex flex-col relative">
            <label className="text-xs text-gray-500 font-bold">{label}</label>

            {type !== 'textarea'
                ? (
                    <input
                        name={name}
                        type={type}
                        value={value}
                        autoComplete="off"
                        className="w-full bg-background text-text leading-6 rounded-sm border-b-2 border-b-primary-300 focus:border-b-primary-100 outline-none transition-colors duration-200 ease-in-out py-1 px-3"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                )
                : (
                    <textarea
                        name={name}
                        value={value}
                        className="w-full h-32 bg-background text-text leading-6 rounded-sm border-b-2 border-b-primary-300 focus:border-b-primary-100 outline-none resize-none transition-colors duration-200 ease-in-out py-1 px-3"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea>
                )
            }

            <div className="">
                <ErrorMessage name={name}>
                    {error => <span className="text-xs text-red-500 text-right font-bold mt-2">{error}</span>}
                </ErrorMessage>
            </div>
        </div>
    );
}
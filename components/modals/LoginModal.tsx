import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { InputText } from '@components/modals/inc/InputText';
import { Button } from '@components/shared/Button';

import { toggleActive } from '@redux/slices/LoginModalSlice';
import { LoginSchema } from '@validation/LoginSchema';

import type { LoginType } from '@ctypes/features/LoginType';


export const LoginModal: React.FC = () => {
    const { isActive } = useAppSelector(store => store.loginModal);
    const dispatch = useAppDispatch();

    const handleSubmit = ({ nick, password }: LoginType) => {
        console.log('Nick: ', nick);
        console.log('Password: ', password);
    }

    return (
        <div className={`w-full h-full flex items-center justify-center fixed top-0 left-0 z-40 transition-all ${isActive || 'opacity-0 pointer-events-none'}`}>
            <div
                className="w-full h-full absolute bg-backgroundOverlay"
                onClick={() => dispatch(toggleActive(false))}
            ></div>

            <div className="bg-backgroundSecondary w-11/12 md:max-w-md mx-auto rounded shadow-lg z-40 overflow-y-auto">
                <div className="text-left p-2 md:p-4 lg:p-6">
                    <div className="flex justify-between items-center">
                        <p className="text-lg md:text-2xl text-text font-bold mb-4 ml-2">Logowanie</p>

                        <div
                            className="cursor-pointer z-50 ml-auto"
                            onClick={() => dispatch(toggleActive(false))}
                        >
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-500"
                            />
                        </div>
                    </div>

                    <Formik
                        initialValues={{ nick: '', password: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { resetForm }) => {
                            handleSubmit(values);
                            resetForm({
                                values: {
                                    nick: values.nick,
                                    password: ''
                                }
                            })
                        }}
                    >
                        {({ values, handleChange, handleBlur, handleSubmit }) => (
                            <Form className="flex flex-col gap-3 p-4 lg:p-8">
                                <InputText
                                    name="nick"
                                    label="Nick"
                                    value={values.nick}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />

                                <InputText
                                    name="password"
                                    type="password"
                                    label="Hasło"
                                    value={values.password}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />

                                <Button
                                    title="Logowanie"
                                    styles="min-w-full mt-6"
                                    ariaLabel="Logowanie do panelu"
                                    handleClick={() => handleSubmit()}
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
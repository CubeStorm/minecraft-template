import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

import { Formik, Form } from 'formik';
import { InputText } from '@components/modals/inc/InputText';
import { Button } from '@components/shared/Button';
import { Modal } from '@components/modals/Modal';

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
        <Modal
            isActive={isActive}
            title="Logowanie"
            handleClose={() => dispatch(toggleActive(false))}
        >
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
        </Modal>
    );
}
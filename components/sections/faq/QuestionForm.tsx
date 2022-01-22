import * as React from 'react';

import { Form, Formik } from 'formik';
import { InputText } from '@components/sections/faq/InputText';
import { Button } from '@components/shared/Button';

import { FaqSchema } from '@validation/FaqSchema';

import type { FaqType } from '@ctypes/features/FaqType';


export const QuestionForm: React.FC = () => {
    const handleSubmit = (values: FaqType) => {
        console.log(values)
    }

    return (
        <>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={FaqSchema}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values);
                    resetForm();
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <Form className="w-full flex flex-col items-center gap-3 -mt-10 md:-mt-15 lg:-mt-20 lg:p-4">
                        <div className="w-full flex flex-wrap justify-center items-center">
                            <div className="w-1/2 min-w-[250px] p-2">
                                <InputText
                                    name="name"
                                    label="Nazwa użytkownika"
                                    value={values.name}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                            </div>

                            <div className="w-1/2 min-w-[250px] p-2">
                                <InputText
                                    name="email"
                                    type="email"
                                    label="Email"
                                    value={values.email}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                            </div>
                        </div>

                        <div className="w-full p-2">
                            <InputText
                                name="message"
                                type="textarea"
                                value={values.message}
                                label="Wiadomość"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                        </div>

                        <div className="p-2 w-full">
                            <Button
                                title="Wyślij"
                                ariaLabel="Wysłanie wiadomości email do administracji serwera"
                                styles="min-w-full mt-5"
                                handleClick={() => handleSubmit()}
                            />
                        </div>
                    </Form>
                )}
            </Formik>

            <div className="w-full text-center border-t border-gray-200 p-2">
                <a className="text-indigo-500">example@email.com</a>
            </div>
        </>
    );
}
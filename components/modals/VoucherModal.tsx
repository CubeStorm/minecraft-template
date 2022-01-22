import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { InputText } from '@components/modals/inc/InputText';
import { Button } from '@components/shared/Button';

import { toggleActive } from '@redux/slices/VoucherModalSlice';
import { VoucherSchema } from '@validation/VoucherSchema';

import type { VoucherType } from '@ctypes/features/VoucherType';


export const VoucherModal: React.FC = () => {
    const { isActive } = useAppSelector(store => store.voucherModal);
    const dispatch = useAppDispatch();

    const handleSubmit = ({ nick, code }: VoucherType) => {
        console.log('Nick: ', nick);
        console.log('Code: ', code);
    }

    return (
        <div className={`w-full h-full flex items-center justify-center fixed top-0 left-0 z-40 transition-all ${isActive || 'opacity-0 pointer-events-none'}`}>
            <div
                className="w-full h-full absolute bg-backgroundOverlay"
                onClick={() => dispatch(toggleActive(false))}
            ></div>

            <div className="bg-background w-11/12 md:max-w-md mx-auto rounded shadow-lg z-40 overflow-y-auto">
                <div className="text-left p-2 md:p-4 lg:p-6">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl text-text font-bold mb-4">Wykorzystaj Voucher</p>

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
                        initialValues={{ nick: '', code: '' }}
                        validationSchema={VoucherSchema}
                        onSubmit={(values, { resetForm }) => {
                            handleSubmit(values);
                            resetForm({
                                values: {
                                    nick: values.nick,
                                    code: ''
                                }
                            })
                        }}
                    >
                        {({ values, handleChange, handleBlur, handleSubmit }) => (
                            <Form className="flex flex-col gap-3 p-4 lg:p-10">
                                <InputText
                                    name="nick"
                                    value={values.nick}
                                    label="Nick"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />

                                <InputText
                                    name="code"
                                    value={values.code}
                                    label="Voucher"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />

                                <Button
                                    title="Wykorzystaj"
                                    styles="min-w-full mt-6"
                                    ariaLabel="Wykorzystaj voucher"
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
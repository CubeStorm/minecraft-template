import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

import { Formik, Form } from 'formik';
import { InputText } from '@components/modals/inc/InputText';
import { Button } from '@components/shared/Button';
import { Modal } from '@components/modals/Modal';

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
        <Modal
            isActive={isActive}
            title="Voucher"
            handleClose={() => dispatch(toggleActive(false))}
        >
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
                    <Form className="flex flex-col gap-3 p-4 lg:p-8">
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
        </Modal>
    )
}
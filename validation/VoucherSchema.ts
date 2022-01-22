import * as Yup from 'yup';


export const VoucherSchema = Yup.object().shape({
    nick: Yup
        .string()
        .required('Pole wymagane'),
    code: Yup
        .string()
        .required('Pole wymagane')
});
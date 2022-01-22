import * as Yup from 'yup';


export const LoginSchema = Yup.object().shape({
    nick: Yup
        .string()
        .required('Pole wymagane'),
    password: Yup
        .string()
        .required('Pole wymagane')
});
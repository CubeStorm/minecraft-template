import * as Yup from 'yup';


export const FaqSchema = Yup.object().shape({
    name: Yup
        .string()
        .required('Pole wymagane'),
    email: Yup
        .string()
        .email('Podaj poprawny adres email')
        .required('Pole wymagane'),
    message: Yup
        .string()
        .min(15, 'Wiadomość musi zawierać minimum 15 znaków')
        .required('Pole wymagane')
});
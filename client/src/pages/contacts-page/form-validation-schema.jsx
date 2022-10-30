// import moment from 'moment';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string()
    .required('Privaloma')
    .email('Neteisingas pašto formatas'),
  emailConfirmation: yup.string()
    .required('Privaloma')
    .oneOf([yup.ref('email')], 'El. paštas nesutampa'),
  fullname: yup.string()
    .required('Privaloma')
    .min(6, 'Mažiausiai 6 simboliai')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Gali būti tik raidės ir tarpai'),
  birthdate: yup.date('Neteisingas datos formatas, pateikite formatu: YYYY-MM-DD'),
});

export default validationSchema;

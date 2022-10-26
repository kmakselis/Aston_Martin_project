import * as React from 'react';
import {
  Box,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import moment from 'moment';
import * as yup from 'yup';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InquiryForm from './inquiry-form';
// import { className } from '@emotion/react';
// import CartContext from '../contexts/cart-context';

const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  order: 1,
  objectFit: 'cover',
});

const ContentContainer = styled(Box)({
  height: '600px',
  width: '700px',
  order: 2,
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
});

const ParamsContainer = styled(Box)({
  position: 'absolute',
  top: 50,
  height: '100%',
  width: '700px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

const dateNow = moment(new Date());

const ContactsPage = () => {
  const currentCar = localStorage.getItem('modelName');

  const initialValues = {
    modelName: currentCar || '',
    email: '',
    emailConfirmation: '',
    fullname: '',
    testdate: dateNow,
  };

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
    birthdate: yup.date('Neteisingas datos formatas, pateikite formatu: YYYY-MM-DD')
      .max(dateNow, 'Negalite pasirinkti ateities laiko'),
  });

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched,
  } = useFormik({
    initialValues,
    validationSchema,
  });

  return (
    <ContentContainer sx={{ border: 1, borderColor: 'error.main' }}>
      <Background component="img" src="/contacts-background.jpg" />

      <ParamsContainer>
        <Typography
          variant="h1"
          component="h1"
          sx={{ color: '#fff', lineHeight: '3em' }}
        >
          Gauti pasiūlymą
        </Typography>

        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: '#fff', lineHeight: '1.5em', align: 'center',
          }}
        >
          Užpildykite formą ir paruošime pasiūlymą išskirtinai Jums.
        </Typography>

        <InquiryForm
          btnText="Registruotis"
          onSubmit={handleSubmit}
          disabled={!dirty || !isValid}
        >
          <TextField
            sx={{ backgroundColor: 'white' }}
            name="modelName"
            type="text"
            fullWidth
            value={values.modelName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.modelName && Boolean(errors.modelName)}
            helperText="Jūsų pasirinktas modelis"
          />
          <TextField
            sx={{ backgroundColor: 'white' }}
            name="email"
            label="Prašome įvesti savo el. paštą"
            type="email"
            variant="filled"
            fullWidth
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            sx={{ backgroundColor: 'white' }}
            name="emailConfirmation"
            label="El. pašto pakartojimas"
            type="email"
            variant="filled"
            fullWidth
            value={values.emailConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.emailConfirmation && Boolean(errors.emailConfirmation)}
            helperText={touched.emailConfirmation && errors.emailConfirmation}
          />
          <TextField
            sx={{ backgroundColor: 'white' }}
            name="fullname"
            label="Vardas Pavardė"
            type="text"
            variant="filled"
            fullWidth
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.fullname && Boolean(errors.fullname)}
            helperText={touched.fullname && errors.fullname}
          />
          <DesktopDatePicker
            sx={{ backgroundColor: 'white' }}
            inputFormat="yyyy-MM-DD"
            disableMaskedInput
            value={values.testdate}
            disableFuture
            onChange={(momentInstance) => {
              // eslint-disable-next-line no-underscore-dangle
              if (momentInstance._isValid) {
                setFieldTouched('testdate', true, false);
                setFieldValue('testdate', momentInstance, true);
              }
            }}
            renderInput={(params) => (
              <TextField
                sx={{ backgroundColor: 'white' }}
            // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                name="testdate"
                label="Bandomojo važiavimo data"
                variant="filled"
                fullWidth
                onBlur={handleBlur}
                error={touched.testdate && Boolean(errors.testdate)}
                helperText={touched.testdate && errors.testdate}
              />
            )}
          />
        </InquiryForm>
      </ParamsContainer>
    </ContentContainer>
  );
};

export default ContactsPage;

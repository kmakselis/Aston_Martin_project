import * as React from 'react';
import {
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import moment from 'moment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InquiryForm from './inquiry-form';
import * as ContactsComponents from './styled-components';
import validationSchema from './form-validation-schema';

const dateNow = moment().toDate();

const ContactsPage = () => {
  const currentCar = localStorage.getItem('modelName');

  const initialValues = {
    modelName: currentCar || '',
    email: '',
    emailConfirmation: '',
    fullname: '',
    testdate: dateNow,
  };

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched,
  } = useFormik({
    initialValues,
    validationSchema,
  });

  return (
    <ContactsComponents.ContentContainer sx={{ border: 1, borderColor: 'error.main' }}>
      <ContactsComponents.Background component="img" src="/contacts-background.jpg" />

      <ContactsComponents.ParamsContainer>
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
            disablePast
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
      </ContactsComponents.ParamsContainer>
    </ContactsComponents.ContentContainer>
  );
};

export default ContactsPage;

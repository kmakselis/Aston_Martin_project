import React from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../components/auth-form';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Privaloma')
    .email('Neteisingas el. pašto formatas'),
  password: yup.string()
    .required('Privaloma')
    .min(8, 'Mažiausiai 8 simboliai')
    .matches(/[a-z]/, 'Bent viena mažoji raidė')
    .matches(/[A-Z]/, 'Bent viena didžioji raidė')
    .matches(/\d/, 'Bent vienas skaičius')
    .matches(/\W/, 'Bent vienas specialus simbolis'),
});

const LoginPage = () => {
  // const onSubmit = async (values) => {
  //   console.log('Forma patvirtinta, atliekami veiksmai...');
  //   console.log(values);
  // };

  const {
    dirty, values, errors, touched, isValid,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    // onSubmit,
  });

  return (
    <AuthForm
      title="Prisijungimas"
      onSubmit={handleSubmit}
      disabled={!dirty || !isValid}
      btnText="Prisijungti"
    >
      <TextField
        name="email"
        label="El. paštas"
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
        name="password"
        label="Slaptažodis"
        type="password"
        variant="filled"
        fullWidth
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
    </AuthForm>
  );
};

export default LoginPage;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/main-layout';
import AuthLayout from '../layouts/auth-layout';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';
import HomePage from '../pages/home-page';
import ModelsPage from '../pages/models-page';
import ContactsPage from '../pages/contacts-page';
import ErrorPage from '../pages/error-page';
import AdminPage from '../pages/admin-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="models" element={<ModelsPage />} />
      <Route path="contacts" element={<ContactsPage />} />
      <Route path="admin" element={<AdminPage />} />

      <Route path="auth/" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;

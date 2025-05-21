import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FormLogin } from '../components/FormLogin';
import { TransparentBox } from '../components/TransparentBox';

export const Login = ({ onLoginSuccess }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';

  const handleLogin = (userData) => {
    onLoginSuccess(userData);
    navigate(from, { replace: true });
  };

  return (
    <>
      <FormLogin onLoginSuccess={handleLogin} />
      <TransparentBox />
    </>
  );
};

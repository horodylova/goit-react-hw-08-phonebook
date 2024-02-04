import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';

import { Container } from '@mui/material';

import { signup } from '../../Redux/auth/auth-operations';
// import { isUserLogin } from 'Redux/auth/auth-selectors';

import RegisterForm from 'components/RegisterForm/RegisterForm';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  // const isLogin = useSelector(isUserLogin);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  // if (isLogin) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <Container maxWidth="xl">
      <div className={css.wrapper}>
        <h2 className={css.title}>Register page</h2>
        <RegisterForm onSubmit={handleSignup} />
      </div>
      <ToastContainer autoClose={1500} position="top-center" />
    </Container>
  );
};

export default RegisterPage;

import { Container } from '@mui/material';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <h2 className={css.title}>Home Page</h2>
      <ToastContainer autoClose={1500} position="top-center" />
    </Container>
  );
};

export default HomePage;

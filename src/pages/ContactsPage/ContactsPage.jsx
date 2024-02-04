import { PhoneBook } from 'components/PhoneBook/PhoneBook';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactsPage = () => {
  return (
    <>
      <PhoneBook />
      <ToastContainer autoClose={1500} position="top-center" />
    </>
  );
};

export default ContactsPage;

import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home ',
    link: '/',
    private: false,
  },
  {
    id: nanoid(),
    text: 'Contacts page',
    link: '/contacts',
    private: true,
  },
  // {
  //   id: nanoid(),
  //   text: 'Login page',
  //   link: '/login',
  //   private: false,
  // },
  // {
  //   id: nanoid(),
  //   text: 'Register page',
  //   link: '/register',
  //   private: false,
  // },
];

export default items;

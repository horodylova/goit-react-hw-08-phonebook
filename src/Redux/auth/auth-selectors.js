// export const isUserLogin = ({ auth }) => auth.isLogin; 

// export const getUserName = ({ auth }) => auth.user; 

// export const getAuth = ({ auth }) => {
//   const { isLogin, token } = auth;
//   return { isLogin, token };
// };

// import { createSelector } from 'reselect';

// const selectAuth = (state) => state.auth;

// export const getAuth = createSelector([selectAuth], (auth) => auth);

import { createSelector } from 'reselect';

const selectAuthState = (state) => state.auth;

export const isUserLogin = createSelector(
  [selectAuthState],
  (auth) => auth.isLogin
);

export const getUserName = createSelector(
  [selectAuthState],
  (auth) => auth.user
);

export const getAuth = createSelector(
  [selectAuthState],
  (auth) => {
    const { isLogin, token, user } = auth;
    return { isLogin, token, user };
  }
);
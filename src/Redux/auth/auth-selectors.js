export const isUserLogin = ({ auth }) => auth.isLogin; 

export const getUserName = ({ auth }) => auth.user; 

export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};

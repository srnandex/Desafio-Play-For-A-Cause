export const saveLogin = (data) => {
  localStorage.setItem('user', JSON.stringify(data));
};

export const getLogin = () => JSON.parse(localStorage.getItem('user'));

export const logout = () => localStorage.removeItem('user');

export const getToken = () => {
  const { token } = getLogin();
  return token;
};

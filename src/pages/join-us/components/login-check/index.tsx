

export const isAuthenticated = () => {
  return Boolean(localStorage.getItem('access_token') && localStorage.getItem('refresh_token'));
};


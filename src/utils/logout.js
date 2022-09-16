////TO-DO: Implement Auth0
const handleLogout = () => {
  localStorage.removeItem('Auth0-token-storage-stub');
  window.location.reload();
};

export default handleLogout;

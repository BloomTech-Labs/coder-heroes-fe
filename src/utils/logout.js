const handleLogout = () => {
  localStorage.removeItem('okta-token-storage');
  window.location.reload();
};

export default handleLogout;

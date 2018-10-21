const setTheme = (theme: 'dark' | 'light') => {
  document.body.removeAttribute('class');
  document.body.classList.add(theme);
};

export default setTheme;

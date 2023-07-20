const shouldUseDarkTheme = (): boolean => {
  const theme = localStorage.getItem('calculatorTheme');

  if (!theme) {
    localStorage.setItem('calculatorTheme', 'dark');
    return true;
  }

  if (theme === 'dark') {
    return true;
  }

  return false;
};

export default shouldUseDarkTheme;

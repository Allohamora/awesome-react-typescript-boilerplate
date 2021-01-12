import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default AppProvider;

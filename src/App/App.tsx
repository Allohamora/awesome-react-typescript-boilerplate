import React from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
import AppProvider from './AppProvider';
import logo from './img/logo.png';
import { Block, Logo, Title } from './styles';

const App: React.FC = () => (
  <ErrorBoundary>
    <AppProvider>
      <Block>
        <Title>Awesome React Typescript Boilerplate</Title>
        <Logo src={logo} alt="logo" />
      </Block>
    </AppProvider>
  </ErrorBoundary>
);

export default App;

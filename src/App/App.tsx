import React from 'react';
import AppProvider from './AppProvider';
import logo from 'assets/images/logo.png';
import { Block, Logo, Title } from './style';

const App: React.FC = () => (
  <AppProvider>
    <Block>
      <Title>Awesome React Typescript Boilerplate</Title>
      <Logo src={logo} alt="logo" />
    </Block>
  </AppProvider>
);

export default App;

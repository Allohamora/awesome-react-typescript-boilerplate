import React from 'react';
import Button from 'components/Button';
import AppProvider from './AppProvider';
import { Block } from './style';

const App: React.FC = () => (
  <AppProvider>
    <Block>App</Block>
    <Button>123</Button>
  </AppProvider>
);

export default App;

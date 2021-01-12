import React from 'react';
import Button from 'components/Button';
import AppProvider from './AppProvider';
import { Block } from './style';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <AppProvider>
      <Block>{t('App.title')}</Block>

      <Button>{t('App.button')}</Button>

      <button onClick={() => i18n.changeLanguage('ru')}>
        RU
      </button>
      <button onClick={() => i18n.changeLanguage('en')}>
        EN
      </button>
    </AppProvider>
  );
};

export default App;

import React, { FC, useMemo } from 'react';
import Layout from './components/Layout';
import Top from './containers/Top';
import I18nContextProvider from './locales';

import './index.css';

const App: FC = () => {
  return useMemo(
    () => (
      <I18nContextProvider>
        <Layout>
          <Top />
        </Layout>
      </I18nContextProvider>
    ),
    []
  );
};

export default App;

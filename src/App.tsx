import React, { FC, useMemo } from 'react';
import Layout from './components/Layout';
import Top from './containers/Top';

const App: FC = () => {
  return useMemo(
    () => (
      <Layout>
        <Top />
      </Layout>
    ),
    []
  );
};

export default App;

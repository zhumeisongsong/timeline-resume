import React, { useMemo } from 'react';
import Header from '..//Header';
import Footer from '../Footer';

type Props = {
  children: any;
  showMenu?: boolean;
};

const Layout = ({ children }: Props) => {
  return useMemo(
    () => (
      <div className="main-container">
        <Header />
        {children}
        <Footer />
      </div>
    ),
    []
  );
};

export default Layout;

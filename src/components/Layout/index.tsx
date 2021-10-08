import React, { useMemo, useEffect } from 'react';
import Header from '..//Header';
import Footer from '../Footer';
import animation from '../../utils/scrollAnimation';

import './index.scss';

type Props = {
  children: any;
  showMenu?: boolean;
};

const Layout = ({ children }: Props) => {
  useEffect(() => {
    animation();
  }, []);

  return useMemo(
    () => (
      <div className="main-container">
        <Header />
        {children}
        <Footer />
      </div>
    ),
    [children]
  );
};

export default Layout;

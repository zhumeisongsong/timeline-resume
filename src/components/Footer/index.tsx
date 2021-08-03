import React, { useMemo } from 'react';

import './index.scss';

const Footer = () => {
  return useMemo(
    () => (
      <footer className="footer-container">
        <span>Copyright Zhumei Song</span> © 2021
      </footer>
    ),
    []
  );
};

export default Footer;

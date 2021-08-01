import React, { useMemo } from 'react';

import './index.scss';

const Footer = () => {
  return useMemo(
    () => (
      <footer className="footer-container">
        Copyright © 2021 Zhumei Song.
      </footer>
    ),
    []
  );
};

export default Footer;

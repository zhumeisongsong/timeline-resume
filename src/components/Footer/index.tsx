import React, { useMemo } from 'react';

const Footer = () => {
  return useMemo(
    () => (
      <footer className="footer-container">
        {/* <FormattedMessage id="copyright" /> */}
        <span>D.S.SHOW</span>© {new Date().getFullYear()}
      </footer>
    ),
    []
  );
};

export default Footer;

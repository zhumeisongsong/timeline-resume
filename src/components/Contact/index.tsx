import React, { useMemo, useCallback, useContext } from 'react';
import { I18nContext } from '../../locales';

import './index.scss';

const Contact = () => {
  const { translate } = useContext(I18nContext);

  return useMemo(
    () => (
      <section className="section-container contact-container">
        <div className="wrapper">
          <div className="item">
            <a className="link-white" href="mailto: zhumeisongsong@gmail.com">
              <div className="icon icon-email" />
              zhumeisongsong@gmail.com
            </a>
          </div>

          <div className="item">
            <a
              className="link-white"
              href={translate('file.careerPath')}
              download
            >
              <div className="icon icon-document" />
              {translate('file.career')}
            </a>
          </div>

          <div className="item">
            <a
              className="link-white"
              href={translate('file.resumePath')}
              download
            >
              <div className="icon icon-resume" />
              {translate('file.resume')}
            </a>
          </div>
        </div>
      </section>
    ),
    []
  );
};

export default Contact;

import React, { useMemo, useCallback, useContext } from 'react';
import { I18nContext } from '../../locales';

const Contact = () => {
  const { translate } = useContext(I18nContext);

  return useMemo(
    () => (
      <section className="section-container contact-container">
        <div className="wrapper">
          <div className="item">
            <a href="mailto: zhumeisongsong@gmail.com">
              zhumeisongsong@gmail.com
            </a>
          </div>

          <div className="item">
            <a href={translate('file.careerPath')}>
              {translate('file.career')}
            </a>
          </div>

          <div className="item">
            <a href={translate('file.resumePath')}>
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

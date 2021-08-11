import React, { useMemo, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faAt,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { I18nContext } from '../../locales';

import './index.scss';

const Contact = () => {
  const { translate } = useContext(I18nContext);

  return useMemo(
    () => (
      <section className="section-container contact-container scroll fade-in">
        <div className="wrapper">
          <div className="item">
            <a
              className="link-white"
              href={translate('file.resumePath')}
              download
            >
              <FontAwesomeIcon icon={faNewspaper} />
              <span>{translate('file.resume')}</span>
            </a>
          </div>

          <div className="item">
            <a
              className="link-white"
              href={translate('file.careerPath')}
              download
            >
              <FontAwesomeIcon icon={faAddressCard} />
              <span>{translate('file.career')}</span>
            </a>
          </div>

          <div className="item">
            <a
              className="link-white"
              href="https://github.com/zhumeisongsong"
              download
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>zhumeisongsong</span>
            </a>
          </div>

          <div className="item">
            <a className="link-white" href="mailto: zhumeisongsong@gmail.com">
              <FontAwesomeIcon icon={faAt} />
              <span>zhumeisongsong@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    ),
    [translate]
  );
};

export default Contact;

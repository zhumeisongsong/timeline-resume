import React, { useMemo, useContext } from 'react';
import Particles from 'react-particles-js';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { I18nContext } from '../../locales';

import './index.scss';

const Introduction = () => {
  const { translate } = useContext(I18nContext);
  const windowDimensions = useWindowDimensions();
  const particlesParams = {
    particles: {
      number: {
        value: windowDimensions.width <= 767 ? 30 : 80
      },
      color: {
        value: '#bbb'
      },
      line_linked: {
        color: '#bbb'
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        }
      }
    }
  };

  return useMemo(
    () => (
      <section className="section-container cover-container scroll fade-in">
        <Particles
          width="100vw"
          height="100vh"
          className="bg-item"
          params={particlesParams}
        />

        <div className="wrapper">
          <div className="name">{translate('intro.hello')}</div>
          <h1>{translate('intro.face')}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: translate('intro.description') }}
          ></p>
          <div className="icon-item">
            <div className="icon icon-arrow-down" />
          </div>
        </div>
      </section>
    ),
    [translate, particlesParams]
  );
};

export default Introduction;

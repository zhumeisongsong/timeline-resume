import React, { useMemo, useCallback, useContext } from 'react';
import Particles from 'react-particles-js';
import { I18nContext } from '../../locales';

const particlesParams = {
  particles: {
    number: {
      value: 70
    },
    color: {
      value: '#ccc'
    },
    line_linked: {
      color: '#ccc'
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

const Introduction = () => {
  const { translate } = useContext(I18nContext);

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
          <p>{translate('intro.description')}</p>
          <div className="icon-item">
            <div className="icon icon-arrow-down" />
          </div>
        </div>
      </section>
    ),
    []
  );
};

export default Introduction;

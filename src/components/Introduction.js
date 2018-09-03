import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import Particles from 'react-particles-js';

const Introduction = (props) => {

  const particlesParams = {
    particles: {
      color: {
        value: '#aaa'
      },
      line_linked: {
        color: '#aaa'
      }
    },
    interactivity:{
      events:{
        onhover:{
          enable: true,
          mode: 'repulse'
        }
      }
    }
  };

  return (
    <div className="cover-container scroll fade-in">
      <Particles
        width="100vw"
        height="100vh"
        className="bg-item"
        params={particlesParams}
      />
      <div className="wrapper">
        <div className="name">
          <FormattedMessage
            id='intro.hello'
            values={{
              name: props.data.name + (props.data.read ? `(${props.data.read})` : '')
            }}/>
        </div>
        <h1 dangerouslySetInnerHTML={{__html: props.data.face}}/>
        <p>{props.data.description}</p>
        <div className="icon-item">
          <div className="icon icon-arrow-down"/>
        </div>
      </div>
    </div>)
};

export default Introduction;
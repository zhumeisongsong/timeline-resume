import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

const Introduction = (props) => {
  return (
    <div className="cover-container scroll fade-in">
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
}

export default Introduction;
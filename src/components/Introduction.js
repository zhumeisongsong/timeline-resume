import React from 'react';
import {FormattedMessage} from 'react-intl';

const Introduction = (props) => {
  return (
    <div className="cover-container">
      <div className="wrapper">
        <div className="name">
          <FormattedMessage
            id='intro.hello'
            values={{
              name: props.data.name + (props.data.read ? `(${props.data.read})` : '')
            }}/>
        </div>
        <h1>{props.data.face}</h1>
        <p>{props.data.description}</p>
        <div className="icon-item">
          <div className="icon icon-arrow-down"/>
        </div>
      </div>
    </div>)
};

export default Introduction;
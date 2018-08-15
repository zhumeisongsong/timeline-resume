import React from 'react';
import {FormattedMessage} from 'react-intl';

const Introduction = (props) => {
  return (
    <div className="cover-container">
      <div>
        <FormattedMessage
          id='intro.hello'
          values={{
            name: props.data.name + (props.data.read ? `(${props.data.read})` : '')
          }}/>
      </div>
      <div>{props.data.face}</div>
      <div>{props.data.description}</div>
      <div className="icon-item">
        <div className="icon icon-arrow-down"/>
      </div>
    </div>)
};

export default Introduction;
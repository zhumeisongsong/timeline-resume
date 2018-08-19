import React from 'react';
import {Icon} from 'antd';

const Contact = (props) => {
  return (<div className="contact-container">
      <div className="wrapper">
        <div className="item">
          <Icon type="profile"/>
        </div>
        <div className="item">
          <Icon type="solution" />
        </div>
        <div className="item">
          <p>email:</p>
          <p>github</p>
        </div>
      </div>
    </div>
  )
};

export default Contact;
import React from 'react';
import {Icon} from 'antd';
import {FormattedMessage} from 'react-intl';
import {getQuery} from '../utils/url';

const Contact = (props) => {
  return (<div className="contact-container scroll fade-in">
      <div className="wrapper">
        <div className="item">
          <Icon type="mail"/>
          <div className="item-content">
            <a href="mailto:zhumei.song@monstar-lab-cn.com">zhumei.song@monstar-lab-cn.com</a>
          </div>
        </div>

        <div className="item">
          <Icon type="profile"/>
          <div className="item-content">
            <a href={props.data.career}>
              <FormattedMessage id="file.career"/>
            </a>
            <a className="download"
               href={props.data.career} download>
              <Icon type="download"/>
            </a>
          </div>
        </div>

        <div className="item">
          <Icon type="solution"/>
          <div className="item-content">
            <a href={props.data.resume}>
              <FormattedMessage id="file.resume"/>
            </a>
            <a className="download"
               href={props.data.resume} download>
              <Icon type="download"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
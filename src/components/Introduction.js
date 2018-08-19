import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import animation from '../utils/animation';

class Introduction extends Component {
  componentDidMount() {
    window.addEventListener('scroll', animation(this.container));
  }

  render() {
    const {
      data
    } = this.props
    return (
      <div className="cover-container scroll fade-in"
           ref={(el) => this.container = el }>
        <div className="wrapper">
          <div className="name">
            <FormattedMessage
              id='intro.hello'
              values={{
                name: data.name + (data.read ? `(${data.read})` : '')
              }}/>

          </div>
          <h1 dangerouslySetInnerHTML={{__html: data.face}}/>
          <p>{data.description}</p>
          <div className="icon-item">
            <div className="icon icon-arrow-down"/>
          </div>
        </div>
      </div>)
  }
}

export default Introduction;
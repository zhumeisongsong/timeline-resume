import React, {Component} from 'react';
import {
  FormattedMessage,
  FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  FormattedPlural,
} from 'react-intl';
import keyIndex from 'react-key-index';
import ImageItem from '../components/common/ImageItem';


let dataArray = [
  {
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png',
    image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
    title: 'Motorcycle',
    time: '',
    content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,'
    + ' the motorcycle referred to in the mainland, Hong Kong and Southeast'
    + ' Asia known as motorcycles.',
    link: '',
    skill: '',
    team: '',
    selfTask: ''
  }
];

dataArray = keyIndex(dataArray, 1);

console.log(dataArray);

class Top extends Component {
  state = {
    lang: 'ja-JP',
    projects: dataArray
  };

  onItemClick = (id) => {
    console.log(id)
  };

  render() {
    const {
      projects,
    } = this.state;
    console.log(this.props.intl);
    const {locale} = this.context;
    return (
      <section className="image-list">
        {projects.map(val => <ImageItem key={val.key} val={val} onClick={this.onItemClick.bind(this, val.id)}/>)}
      </section>
    )
  }
}

export default Top
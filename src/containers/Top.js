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
    id: 1,
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
    this.props.history.push('/projects/1')
  };

  render() {
    const {
      projects,
    } = this.state;
    console.log(this.props.intl);
    const {locale} = this.context;

    return (
      <section className="image-list">
        {projects.map(val => <ImageItem key={val._idId} val={val} onClick={this.onItemClick.bind(this, val.id)}/>)}
      </section>
    )
  }
}

export default Top
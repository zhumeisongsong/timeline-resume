import React, {Component} from 'react';
import {
  FormattedMessage,
  FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  FormattedPlural,
  defineMessages
} from 'react-intl';
import keyIndex from 'react-key-index';
import {Modal, Button} from 'antd';

import Introduction from '../components/Introduction';
import SkillList from '../components/SkillList';
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

class Top extends Component {
  state = {
    projects: dataArray,
    modalVisible: false,

  };

  setModalVisible(modalVisible) {
    this.setState({modalVisible});
  };

  render() {
    const {
      projects,
    } = this.state;

    console.log(this.props.defaultData)

    const modalBack = <FormattedMessage
      id='button.back'/>

    const detailContent = (<div>

    </div>)

    return (
      <div>
        <Introduction/>
        <SkillList/>

        <section className="image-list">
          {projects.map(val => <ImageItem key={val._idId} val={val} onClick={() => this.setModalVisible(true) }/>)}
        </section>
        <Modal
          className="detail"
          title="dddd"
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          okText={modalBack}
        >
          {detailContent}
        </Modal>
      </div>
    )
  }
}

export default Top
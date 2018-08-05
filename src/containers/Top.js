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
import {Modal} from 'antd';
import _ from 'lodash';

import Introduction from '../components/Introduction';
import SkillList from '../components/SkillList';
import ImageItem from '../components/common/ImageItem';


class Top extends Component {
  state = {
    detailIndex: '',
    modalVisible: false
  };

  setModalVisible(modalVisible, id) {
    let index = _.findIndex(this.props.projects, {id})
    this.setState({
      modalVisible,
      detailIndex: index
    });
  };

  render() {
    const {
      detailIndex,
      modalVisible
    } = this.state;

    const {
      projects
    } = this.props;

    console.log(this.props.defaultData);

    const modalBack = <FormattedMessage
      id='button.back'/>;

    // modal content template
    const detailContent = (<div>
      {/*content*/}

      {/*imageList*/}
      <ImageItem val={projects[detailIndex]}/>
    </div>);

    console.log(projects);

    return (
      <div>
        <Introduction/>
        <SkillList/>

        {projects &&
        <section className="image-list">
          {projects.map(val =>
            <div
              key={val._idId}
              className="item"
              onClick={() => this.setModalVisible(true, val.id)}
            >
              <ImageItem val={val}/>
            </div>
          )}
        </section>
        }

        {modalVisible &&
        <Modal
          className="detail"
          title={projects[detailIndex].name}
          visible={modalVisible}
          onCancel={() => this.setModalVisible(false)}
          cancelText={modalBack}
        >
          {detailContent}
        </Modal>
        }

      </div>
    )
  }
}

export default Top
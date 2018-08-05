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
import {Modal} from 'antd';

import Introduction from '../components/Introduction';
import SkillList from '../components/SkillList';
import ImageItem from '../components/common/ImageItem';

import Api from '../api';

class Top extends Component {
  state = {
    project: [],
    detailData: {},
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({modalVisible});
  };

  _fetchData(lang) {
    Api.getProjects(lang, data => {
      this.setState({
        projects: data
      })
    })
  };

  componentDidMount() {
    this._fetchData(this.props.defaultData.locale)
  };

  render() {
    const {
      projects,
    } = this.state;

    console.log(this.props.defaultData);

    const modalBack = <FormattedMessage
      id='button.back'/>;

    const detailContent = (<div>

    </div>);

    return (
      <div>
        <Introduction/>
        <SkillList/>

        {projects &&
        <section className="image-list">
          {projects.map(val =>
            <ImageItem
              key={val._idId}
              val={val}
              onClick={() => this.setModalVisible(true) }
            />)}
        </section>
        }

        <Modal
          className="detail"
          title="dddd"
          visible={this.state.modalVisible}
          onCancel={() => this.setModalVisible(false)}
          cancelText={modalBack}
        >
          {detailContent}
        </Modal>
      </div>
    )
  }
}

export default Top
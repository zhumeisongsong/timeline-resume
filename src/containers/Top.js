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
    let index = _.findIndex(this.props.projects, {id});
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
      introduction,
      skill,
      projects
    } = this.props;

    const modalBack = <FormattedMessage
      id='button.back'/>;

    // modal content template
    const detailContent = projects[detailIndex] ? (
      <div>
        {/*content*/}
        {Object.keys(projects[detailIndex]['contentList']).map((key) => {
            const item = projects[detailIndex]['contentList'][key];
            const normalItem = (
              <div className="value">
                {item}
              </div>
            );
            const teamItem = (
              <div className="item">
                {item.frontEnd}
                {item.backEnd}
                {item.qc}
                {item.design}
              </div>
            );
            const valueItem = key !== 'team' ? normalItem : teamItem;
            return (
              <div className="item" key={key}>
                <div className="key">
                  <FormattedMessage
                    id={`list.${key}`}/>
                </div>
                {valueItem}
              </div>
            )
          }
        )}

        {/*imageList*/}
        <div className="detail-images">
          {projects[detailIndex]['detailImage'].map((val) =>
            <img src={val} key={val}/>
          )}
        </div>
      </div>
    ) : null;

    return (
      <div>
        {JSON.stringify(introduction) !== '{}' &&
        <Introduction data={introduction}/>
        }

        {projects.length > 0 &&
        <section className="image-list">
          {projects.map(val =>
            <div
              key={val.id}
              className="item"
              onClick={() => this.setModalVisible(true, val.id)}
            >
              <ImageItem val={val.cover}/>
              <div className="hover-cover">
                <button>{val.contentList.name}</button>
              </div>
            </div>
          )}
        </section>
        }

        {modalVisible &&
        <Modal
          className="detail"
          title={projects[detailIndex]['contentList'].name}
          visible={modalVisible}
          onCancel={() => this.setModalVisible(false)}
          cancelText={modalBack}
        >
          {detailContent}
        </Modal>
        }

        {skill.length > 0 &&
        <SkillList data={skill}/>
        }

      </div>
    )
  }
}

export default Top
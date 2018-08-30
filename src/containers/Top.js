import React, {Component} from 'react';
import {Modal} from 'antd';
import _ from 'lodash';
import {
  FormattedMessage
} from 'react-intl';

import ImageItem from '../components/common/ImageItem';
import Introduction from '../components/Introduction';
import SkillList from '../components/SkillList';
import Contact from '../components/Contact';
import Detail from '../components/Detail';

import {key2value} from '../utils/string';

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

    const modalBack = <FormattedMessage id='button.back'/>;

    // modal content template
    const detailContent = projects[detailIndex] ? (
      <Detail data={projects[detailIndex]}/>
    ) : null;

    return (
      <div>
        {/*container introduction*/}
        {JSON.stringify(introduction) !== '{}' &&
        <Introduction data={introduction}/>
        }

        {/*container projects*/}
        {projects.length > 0 &&
        <section className="image-list scroll fade-in">
          {projects.map(val =>
            <div
              key={val.id}
              className="item"
              onClick={() => this.setModalVisible(true, val.id)}
            >
              <ImageItem val={val.cover}/>
              <div className="hover-cover">
                <div className="wrapper">
                  <p className="title">{val.contentList.name}</p>
                  {val.containLink &&
                  <p className="tag">
                    <FormattedMessage id='tag.link'/></p>
                  }
                  {val.containCode &&
                  <p className="tag">
                    <FormattedMessage id='tag.code'/>
                  </p>
                  }
                </div>
              </div>
            </div>
          )}
        </section>
        }

        {/*container skill*/}
        {JSON.stringify(skill) !== "{}" &&
        <SkillList data={skill}/>
        }

        {/*container instruction*/}
        {JSON.stringify(introduction) !== '{}' &&
        <Contact data={introduction}/>
        }

        {/*modal*/}
        {modalVisible &&
        <Modal
          className="detail"
          title={key2value('projectType', projects[detailIndex]['contentList'].type)}
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
import React, {Component} from 'react';
import {
  FormattedMessage
} from 'react-intl';
import {Modal} from 'antd';
import _ from 'lodash';

import ImageItem from '../components/common/ImageItem';
import Introduction from '../components/Introduction';
import SkillList from '../components/SkillList';
import Contact from '../components/Contact';

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
      <div>
        {/*content*/}
        {console.log(projects[detailIndex]['contentList'])}
        <FormattedMessage id={`list.name`}/>
        <FormattedMessage id={`list.link`}/>
        <FormattedMessage id={`list.codeLink`}/>

        <FormattedMessage id={`list.content`}/>

        <FormattedMessage id={`list.skill`}/>
        <FormattedMessage id={`list.team`}/>
        <FormattedMessage id={`list.selfResponsibility`}/>
        <FormattedMessage id={`list.myRole`}/>

        <FormattedMessage id={`list.country`}/>
        <FormattedMessage id={`list.time`}/>
        <FormattedMessage id={`list.infrastructure`}/>

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
                    <FormattedMessage
                      id='tag.link'/></p>
                  }
                  {val.containCode &&
                  <p className="tag">
                    <FormattedMessage
                      id='tag.code'/>
                  </p>
                  }
                </div>
              </div>
            </div>
          )}
        </section>
        }

        {JSON.stringify(skill) !== "{}" &&
        <SkillList data={skill}/>
        }

        {JSON.stringify(introduction) !== '{}' &&
        <Contact data={introduction}/>
        }

        {modalVisible &&
        <Modal
          className="detail"
          title={projects[detailIndex]['contentList'].type}
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
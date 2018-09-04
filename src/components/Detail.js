import React from 'react';
import {
  FormattedMessage
} from 'react-intl';
import {key2value, nl2br} from '../utils/string'

const Detail = (props) => {
  return (
    <div className="detail-content">
      <h2>{props.data.contentList.name}</h2>
      {props.data.contentList.link &&
      <div className="item link">
        <a href={props.data.contentList.link} target="_blank"
           rel="noreferrer noopener">{props.data.contentList.link}</a>
      </div>
      }
      <div className="col-left">

        <div className="item">
          <div className="item-label">
            <FormattedMessage id={`list.time`}/>
          </div>
          <div className="item-content">
            {props.data.contentList.time}
          </div>
        </div>

        <div className="item">
          <div className="item-label">
            <FormattedMessage id={`list.country`}/>
          </div>
          <div className="item-content">
            <FormattedMessage id={`country.${key2value('country', props.data.contentList.country)}`}/>
          </div>
        </div>

        {props.data.contentList.codeLink &&
        <div className="item">
          <div className="item-label">
            <FormattedMessage id={`list.codeLink`}/>
          </div>
          <a href={props.data.contentList.codeLink} target="_blank"
             rel="noreferrer noopener">{props.data.contentList.codeLink}</a>
        </div>
        }

        <div className="item">
          <div className="item-label">
            <FormattedMessage id={`list.skill`}/>
          </div>
          <div className="item-content">
            {isNaN(parseInt(props.data.contentList.skill, 10)) ?
              props.data.contentList.skill :
              key2value('skillType', props.data.contentList.skill)
            }
          </div>
        </div>

        {/*myRole list*/}
        <div className="item">
          <div className="item-label">
            <FormattedMessage id={`list.myRole`}/>
          </div>
          <div className="item-content">
            <ul>
              {props.data.contentList.myRole.map((val) => {
                return ( <li key={val}>
                  <FormattedMessage className="ul-name" id={`role.${key2value('roleType', val)}`}/>
                </li>)
              })}
            </ul>
          </div>
        </div>

        {/*team member list*/}
        <div className="item">
          <div className="item-label">
            <FormattedMessage id={`list.team`}/>
          </div>
          <div className="item-content">
            <ul>
              {Object.keys(props.data.contentList.team).map((key) => {
                return ( <li key={key}>
                  <FormattedMessage className="ul-name" id={`team.${key}`}/>
                  <span>{props.data.contentList.team[key]}</span>
                  <FormattedMessage id={`list.unit`}/>
                </li>)
              })}
            </ul>
          </div>
        </div>

        <div className="item">
          {props.data.contentList.content}
        </div>

        <div className="item" dangerouslySetInnerHTML={{__html: nl2br(props.data.contentList.learned)}}/>
      </div>

      {/*imageList*/}
      <div className="detail-images">
        {props.data['detailImage'].map((val) =>
          <img src={val} key={val}/>
        )}
      </div>
    </div>
  )
};

export default Detail
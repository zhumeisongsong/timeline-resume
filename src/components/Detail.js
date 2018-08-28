import React from 'react';
import {
  FormattedMessage
} from 'react-intl';

const Detail = (props) => {
  console.log(props.data)
  return (
    <div className="detail-content">
      <h2>{props.data.contentList.name}</h2>
      <div className="col-left">

        {/*content*/}
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
          {props.data['detailImage'].map((val) =>
            <img src={val} key={val}/>
          )}
        </div>
      </div>
    </div>
  )
};

export default Detail
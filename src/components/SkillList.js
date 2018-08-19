import React from 'react';

const SkillList = (props) => {
  const score = (score) => {
    let string = '';
    for (let i = 0; i < score; i++) {
      string = string + '★'
    }
    for (let i = 0; i < 5 - score; i++) {
      string = string + '☆'
    }
    return string;
  };

  const content = (val) => {
    return (
      <div key={val.id} className="item">
        <h4>
          <span className="title">{val.type}:</span>
          <span className="score">{score(val.score)}</span>
        </h4>
        <p className="description">{val.content}</p>
      </div>
    )
  };

  return (<div className="skill-container scroll fade-in">
    <div className="wrapper">
      <div className="content">
        {props.data['hard'].map((val) =>
          content(val)
        )}
      </div>
      <div className="content">
        {props.data['soft'].map((val) =>
          content(val)
        )}
      </div>
    </div>
  </div>)
};

export default SkillList;
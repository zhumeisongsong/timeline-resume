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
  }

  return (<div className="skill-container">
    {props.data.map((val) =>
      <div key={val.id} className="item">
        <h2>
          <span className="title">{val.type}</span>
          <span className="score">{score(val.score)}</span>
        </h2>
        <div className="description">{val.content}</div>
      </div>
    )}
  </div>)
};

export default SkillList;
import React from 'react';

const SkillList = (props) => {
  const score =()=>{

  }

  return (<div className="skill-container">
    {props.data.map((val) =>
      <div key={val.id} className="item">
        {console.log(val)}
        <h2>{val.type}</h2>
        <div>{val.score}</div>
        <div>{val.content}</div>
      </div>
    )}
  </div>)
};

export default SkillList;
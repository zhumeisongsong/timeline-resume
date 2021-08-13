import React, { useMemo } from 'react';

import './index.scss';

type SkillType = {
  id: number;
  type: string;
  content: string;
  score: number;
};

const data = {
  hard: [
    {
      id: 1,
      type: 'Web Development',
      content:
        'Javascript(ES5,ES6)/Typescript/HTML5/CSS(sass,less,stylus,style-components)',
      score: 4
    },
    {
      id: 2,
      type: 'React Family Bucket',
      content: 'React.js+react-router+Redux(rematch)+immer.js',
      score: 4
    },
    {
      id: 3,
      type: 'Build tools',
      content: 'Webpack/Parcel/Gulp/Rollup',
      score: 4
    },
    {
      id: 4,
      type: 'Automated test',
      content: 'Jest/React Testing Library/Nightwatch',
      score: 3
    },
    {
      id: 5,
      type: 'Back-end',
      content: 'nodejs',
      score: 3
    },
    {
      id: 6,
      type: 'Others',
      content:
        'AWS-cli/AWS-Amplify/AWS-Appsync/Firebase/Heroku/Git flow/Git Actions',
      score: 3
    }
  ],
  soft: [
    {
      id: 1,
      type: 'Rapid Learning',
      content: 'Have a solid foundation and embrace change.',
      score: 5
    },
    {
      id: 2,
      type: 'Solving Problems',
      content:
        'Identify the problem correctly, solve it and summarize experience.',
      score: 4
    },
    {
      id: 3,
      type: 'Communication',
      content: 'Communicate effectively in teamwork.',
      score: 4
    },
    {
      id: 4,
      type: 'Sharing',
      content: 'Sharing ideas with others is the best way to improve.',
      score: 4
    }
  ]
};

const score = (score: number) => {
  let string = '';
  for (let i = 0; i < score; i++) {
    string = string + '★';
  }
  for (let i = 0; i < 5 - score; i++) {
    string = string + '☆';
  }
  return string;
};

const Skill = () => {
  const content = (item: SkillType) => {
    return (
      <div key={item.id} className="item">
        <h4>
          <span className="title">{item.type}:</span>
          <span className="score text-gradient">{score(item.score)}</span>
        </h4>
        <p className="description">{item.content}</p>
      </div>
    );
  };

  return useMemo(
    () => (
      <section className="section-container skill-container scroll fade-in">
        <div className="wrapper">
          <div className="content">
            {data['hard'].map((item) => content(item))}
          </div>
          <div className="content">
            {data['soft'].map((item) => content(item))}
          </div>
        </div>
      </section>
    ),
    []
  );
};

export default Skill;

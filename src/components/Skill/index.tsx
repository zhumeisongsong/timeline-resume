import React, { useMemo, useCallback } from 'react';

const data = {
  hard: [
    {
      id: 1,
      type: 'Web develop',
      content: 'Html5/Css3/Sass/Stylus/Javascript/ES6/Typescript',
      score: 4
    },
    {
      id: 2,
      type: 'Framework&Library',
      content: 'React.js+Redux',
      score: 4
    },
    {
      id: 3,
      type: 'Build tools',
      content: 'Webpack/Gulp/Rollup',
      score: 4
    },
    {
      id: 4,
      type: 'Automated test',
      content: 'Jest/Karma/Nightwatch',
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
      content: 'AWS cli / AWS Amplify / AWS Appsync / Firebase / Heroku',
      score: 3
    }
  ],
  soft: [
    {
      id: 1,
      type: 'Rapid learning',
      content: "According to the project's need, learn new technology.",
      score: 5
    },
    {
      id: 2,
      type: 'Solving problems',
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

const Skill = () => {
  return useMemo(() => <div>Skill</div>, []);
};

export default Skill;

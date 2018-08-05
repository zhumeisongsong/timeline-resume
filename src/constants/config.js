import keyIndex from 'react-key-index';

export let langList = [
  // {
  // lang: 'zh-cn',
  //   type: 'zh-CN',
  //   name: '中文'
  // },
  {
    lang: 'ja',
    type: 'ja-JP',
    name: '日本語'
  },
  {
    lang: 'en',
    type: 'en-US',
    name: 'English'
  }
];

langList = keyIndex(langList, 1);


export const projectType = [
  {
    id: 1,
    name: 'Web Site'
  },
  {
    id: 2,
    name: 'Web App'
  },
  {
    id: 3,
    name: 'Hybrid App',
  },
  {
    id: 4,
    name: 'Others'
  },
  {
    id: 5,
    name: 'CMS'
  },
  {
    id: 6,
    name: 'SPA'
  }
]



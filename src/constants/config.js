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
    name: 'WebSite'
  },
  {
    id: 2,
    name: 'WebApp'
  },
  {
    id: 3,
    name: 'HybridApp',
  },
  {
    id: 4,
    name: 'Others'
  },
  {
    id: 6,
    name: 'SPA'
  },
  {
    id: 7,
    name: 'PHP'
  }
]



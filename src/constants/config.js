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



export interface MapType {
  id: number,
  name: string,
  lang?: string,
  type?: string
}

export const langType = [
  {
    id: 2,
    lang: 'ja',
    type: 'ja-JP',
    name: '日本語'
  },
  {
    id: 3,
    lang: 'en',
    type: 'en-US',
    name: 'English'
  }
];

export const projectType = [
  {
    id: 1,
    name: 'Website'
  },
  {
    id: 2,
    name: 'Web App'
  },
  {
    id: 3,
    name: 'Hybrid App(webview)',
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
];

// export const skillType = [
//   {
//     id: 1,
//     name: 'React.js'
//   },
//   {
//     id: 2,
//     name: 'Redux(Rematch)',
//   },
//   {
//     id: 3,
//     name: 'Redux+Redux-saga',
//   },
//   {
//     id: 4,
//     name: 'react-router',
//   },
//   {
//     id: 5,
//     name: 'Typescript',
//   },
//   {
//     id: 6,
//     name: 'axios'
//   },
//   {
//     id: 7,
//     name: 'Antd'
//   },
//   {
//     id: 8,
//     name: 'Gatsby.js'
//   },
// ];

export const roleType = [
  {
    id: 1,
    name: 'survey'
  },
  {
    id: 2,
    name: 'design'
  },
  {
    id: 3,
    name: 'architecture'
  },
  {
    id: 4,
    name: 'code'
  },
  {
    id: 5,
    name: 'unit'
  },
  {
    id: 6,
    name: 'integration'
  },
  {
    id: 7,
    name: 'release'
  },
  {
    id: 8,
    name: 'review'
  },
  {
    id: 9,
    name: 'refactor'
  }
];




const projectEnUS = [
  {
    id: 37,
    cover: {
      thumbnail: '/images/projects/37/thumbnail-min.jpg',
      image: '/images/projects/37/cover-min.jpg'
    },
    detailImage: [],
    name: 'Medical Counseling System',
    type: '2',
    time: '2021/07~',
    skill: ['Admin Panel: react.js + rematch + react-router + axois + typescript', 'Client: Gatsby.js + rematch(immer.js) + axois + typescript'],
    myRole: ['3', '4', '5'],
    team: {
      total: 14,
      design: 5,
      frontEnd: 3,
      backEnd: 2,
      qc: 2
    },
    learned: ''
  },
  {
    id: 36,
    cover: {
      thumbnail: '/images/projects/36-drink-order-app/thumbnail-min.jpg',
      image: '/images/projects/36-drink-order-app/cover-min.jpg'
    },
    detailImage: [],
    name: 'Drink Order Web App',
    type: '2',
    time: '2021/04~2021/07',
    content: '',
    skill: ['Gatsby.js + Plugin of Gatsby.js + rematch(immer.js) + axois + typescript'],
    myRole: ['1', '3', '4', '5'],
    team: {
      total: 12,
      design: 2,
      frontEnd: 2,
      backEnd: 2,
      qc: 2
    },
    learned: ''
  },
  {
    id: 35,
    type: '6',
    cover: {
      thumbnail: '/images/projects/npm/thumbnail-min.jpg',
      image: '/images/projects/npm/cover-min.jpg'
    },
    detailImage: [],
    name: 'Npm package(OSS)',
    link: 'https://www.npmjs.com/package/react-url-image-downloader',
    codeLink: 'https://github.com/zhumeisongsong/react-url-image-downloader',
    skill: ['react.js'],
    myRole: ['4'],
    team: {
      total: 1,
    },
    learned: 'Use Typescript as the js builder. OSS contribute.',
  },
  {
    id: 34,
    cover: {
      thumbnail: '/images/projects/34-fan-club/thumbnail-min.jpg',
      image: '/images/projects/34-fan-club/cover-min.jpg'
    },
    detailImage: [],
    name: 'Fan Club Web App',
    type: '2',
    time: '2021/01~2021/04',
    skill: ['react.js + redux + redux-saga + react-router + axois'],
    content: '',
    myRole: ['1', '3', '4', '5'],
    team: {
      total: 13,
      design: 3,
      frontEnd: 3,
      backEnd: 3,
      qc: 3
    },
    learned: 'Pass data by iframe to preview post. If image is cached, can not download image by url.'
  },
  {
    id: 33,
    cover: {
      thumbnail: '/images/projects/33-live-message/thumbnail-min.jpg',
      image: '/images/projects/33-live-message/cover-min.jpg'
    },
    detailImage: [],
    name: 'Message Function of Live',
    type: '2',
    time: '2020/07',
    skill: ['react.js + typeescript + amplify'],
    content: '',
    codeLink: 'https://github.com/zhumeisongsong/amplify-serverless-react-app',
    myRole: ['1', '3', '4', '5'],
    team: {
      total: 4,
      frontEnd: 1,
      qc: 1
    },
    learned: 'Amplify API. Pressure test.'
  },
  {
    id: 31,
    cover: {
      thumbnail: '/images/projects/31-mamoriai-jp/thumbnail-min.jpg',
      image: '/images/projects/31-mamoriai-jp/cover-min.jpg'
    },
    detailImage: [],
    name: 'Admin Panel of Mamoriai JAPAN(OSS)',
    type: '2',
    time: '2020/05',
    content: 'Covid tracer app. Admin pannel design and coding.',
    Link: 'https://ja.wikipedia.org/wiki/%E3%81%BE%E3%82%82%E3%82%8A%E3%81%82%E3%81%84JAPAN',
    codeLink: 'https://github.com/mamori-i-japan/mamori-i-japan-admin-panel',
    skill: ['react.js + redux + redux-saga + react-router + typeescript + Firebase'],
    myRole: ['1', '3', '4', '5'],
    team: {
      design: 11,
      frontEnd: 2,
      backEnd: 2,
      qc: 2
    },
    learned: 'How to countribute to OSS.'
  },
  // {
  //   id: 30,
  //   type: '2',
  //   cover: {
  //     thumbnail: '/images/projects/30/thumbnail-min.jpg',
  //     image: '/images/projects/30/cover-min.jpg'
  //   },
  //   detailImage: [],
  //   name: 'Landing Page',
  //   time: '2020/01～2020/04'
  // },
  // {
  //   id: 29,
  //   type: '2',
  //   cover: {
  //     thumbnail: '/images/projects/26-nippon-hodai/thumbnail-min.jpg',
  //     image: '/images/projects/26-nippon-hodai/cover-min.jpg'
  //   },
  //   detailImage: [],
  //   name: 'Online Booking System',
  //   time: '2019/08～2020/01'
  // },
  {
    id: 28,
    type: '2',
    cover: {
      thumbnail: '/images/projects/28-alpaca/thumbnail-min.jpg',
      image: '/images/projects/28-alpaca/cover-min.jpg'
    },
    detailImage: [],
    name: 'Alpaca Securities System',
    time: '2019/01～2019/06',
    content: '',
    link: 'https://sec.alpaca.ai/',
    skill: ['React.js + redux + redux-thunk + react-router + typescript'],
    myRole: ['2', '3', '4', '5'],
    team: {
      total: 5,
      design: 1,
      frontEnd: 2,
      backEnd: 2,
    },
    learned: 'Using ypescript'
  },
  {
    id: 26,
    cover: {
      thumbnail: './images/projects/26-nippon-hodai/thumbnail-min.png',
      image: './images/projects/26-nippon-hodai/cover-min.jpg'
    },
    detailImage: [],
    name: 'C2C curation site(Client)',
    type: '1',
    time: '2018/06～2018/11',
    content:
      'A responsive website of travel topic. It includes 2 parts content display and profile center.',
    link: 'https://nippon.hodaiweb.com/',
    codeLink: 'https://github.com/zhumeisongsong/TS_niponhoudai',
    skill: ['1'],
    myRole: ['3', '4', '5', '8', '9'],
    team: {
      total: 10,
      design: 2,
      frontEnd: 2,
      backEnd: 3,
      qc: 2
    },
    learned:
      'Use rollup to compile ES6 to ES5. Use AWS codepipeline & docker for auto deploy. Learned why should use staging environment.'
  },
  {
    id: 25,
    cover: {
      thumbnail: './images/projects/25-nippon-hodai-CMS/thumbnail-min.png',
      image: './images/projects/25-nippon-hodai-CMS/cover-min.png'
    },
    // detailImage: ['./images/projects/25-nippon-hodai-CMS/detail-min.png'],
    name: 'C2C curation site(admin)',
    type: '2',
    time: '2018/06～2018/11',
    content: 'The CMS of a C2C curation site',
    link: '',
    codeLink: 'https://github.com/zhumeisongsong/TS_niponhoudai_CMS',
    skill: ['react.js + redux + redux-thunk + react-router + axois'],
    myRole: ['3', '4', '5', '8'],
    team: {
      total: 10,
      design: 2,
      frontEnd: 2,
      backEnd: 3,
      qc: 2
    },
    learned: ''
  },
  {
    id: 24,
    cover: {
      thumbnail: './images/projects/24-koubei/thumbnail-min.png',
      image: './images/projects/24-koubei/cover-min.jpg'
    },
    // detailImage: [
    //   './images/projects/24-koubei/detail-1-min.png',
    //   './images/projects/24-koubei/detail-2-min.png',
    //   './images/projects/24-koubei/detail-3-min.png'
    // ],
    name: 'A Web App in Alipay platform',
    type: '2',
    time: '2018/05～2018/06',
    content: '',
    skill: ['react.js + redux + redux-saga + react-router + axios + immutable.js', 'auto deploy(docker)'],
    myRole: ['1', '3', '4', '5'],
    team: {
      total: 7,
      design: 1,
      frontEnd: 2,
      backEnd: 2,
      qc: 2
    },
    learned:
      'Used immutable.js for letting reducer be maintainable and testable. No defensive copying, and enabling advanced memoization and change detection techniques with simple logic.'
  },
  {
    id: 20,
    cover: {
      thumbnail: './images/projects/20-DSB/thumbnail-min.png',
      image: './images/projects/20-DSB/cover-min.png'
    },
    // detailImage: [
    //   './images/projects/20-DSB/detail-1-min.png',
    //   './images/projects/20-DSB/detail-2-min.png',
    //   './images/projects/20-DSB/detail-3-min.png'
    // ],
    name: 'Tax data analysis system',
    type: '1',
    time: '2018/01～2010/04',
    content: '',
    codeLink: 'https://github.com/zhumeisongsong/DSB_FAM_Front',
    skill: ['Vue.js + Vuex'],
    myRole: ['1', '3', '8', '9'],
    team: {
      total: 11,
      design: 2,
      frontEnd: 3,
      backEnd: 2,
      qc: 2
    },
    learned: ''
  },
  {
    id: 19,
    cover: {
      thumbnail: './images/projects/19-colorit/thumbnail-min.png',
      image: './images/projects/19-colorit/cover-min.png'
    },
    detailImage: [],
    name: 'Deep learning--color photos',
    type: '1',
    time: '2018/01',
    content: '',
    codeLink: 'https://github.com/git-hacker/colorit',
    skill: ['MINA'],
    myRole: ['1', '3', '4', '5'],
    team: {
      total: 3,
      frontEnd: 2,
      backEnd: 1
    },
    learned: 'The first prize of Hackathon code tank.'
  },
  {
    id: 18,
    cover: {
      thumbnail: './images/projects/18-VR/thumbnail-min.png',
      image: './images/projects/18-VR/cover-min.png'
    },
    // detailImage: [
    //   './images/projects/18-VR/detail-1-min.png',
    //   './images/projects/18-VR/detail-2-min.png'
    // ],
    name: 'Video website for mobile',
    type: '1',
    time: '2018/01',
    content: 'A website based on video.js',
    codeLink: 'https://github.com/zhumeisongsong/static-video-360',
    skill: ['pug + gulp + sass'],
    myRole: ['1', '2', '3', '4', '5', '6'],
    team: {
      total: 5,
      frontEnd: 1,
      backEnd: 1
    },
    learned: 'Video.js API, videojs VR plugin'
  },
  {
    id: 11,
    cover: {
      thumbnail: './images/projects/11-flower-plus/thumbnail-min.jpg',
      image: './images/projects/11-flower-plus/cover-min.jpg'
    },
    detailImage: [],
    name: 'B2C Shop Demo',
    country: '1',
    type: '2',
    time: '2017/06～2017/09',
    codeLink: 'https://github.com/zhumeisongsong/angular-my-app',
    skill: ['Angular4'],
    myRole: ['1', '2', '3', '4', '5', '6', '7'],
    team: {
      total: 10,
      design: 1,
      frontEnd: 2,
      backEnd: 3,
      qc: 2
    },
    content: 'Shop demo for team share, no backend support.',
    learned:
      "In cart, the total price will change with count add or minus.This shows different components share same state.\rIn order confirm page, by using angular's router configa auth check is provided for calling login."
  },
  {
    id: 9,
    cover: {
      thumbnail: './images/projects/09-videojs/thumbnail-min.png',
      image: './images/projects/09-videojs/cover-min.png'
    },
    // detailImage: ['./images/projects/09-videojs/detail-min.png'],
    name: 'Video website',
    type: '1',
    time: '2017/04',
    content: '',
    codeLink: 'https://github.com/zhumeisongsong/nogizaka46',
    skill: ['pug + gulp + sass'],
    myRole: ['4', '5'],
    team: {
      total: 3,
      frontEnd: 1,
      backEnd: 1
    },
    learned: ''
  },
  {
    id: 7,
    cover: {
      thumbnail: './images/projects/07-vip/thumbnail-min.png',
      image: './images/projects/07-vip/cover-min.jpg'
    },
    detailImage: [],
    name: 'B2C Hybrid App',
    type: '1',
    time: '2016/03～2016/08',
    content: '',
    link: '',
    codeLink: '',
    skill: ['HTML CSS Javascript'],
    myRole: ['4', '5', '6', '7'],
    team: {
      total: 11,
      design: 2,
      frontEnd: 5,
      backEnd: 2
    },
    learned: ''
  },
  {
    id: 5,
    cover: {
      thumbnail: './images/projects/05-car/thumbnail-min.png',
      image: './images/projects/05-car/cover-min.png'
    },
    detailImage: [],
    name: 'QA game page',
    type: '1',
    time: '2015/09',
    content: '',
    codeLink: 'https://github.com/zhumeisongsong/static-car-game',
    skill: ['HTML CSS Javascript'],
    myRole: ['3','4'],
    team: {
      total: 2,
      frontEnd: 1,
      backEnd: 1
    },
    learned: ''
  },
  {
    id: 1,
    cover: {
      thumbnail: './images/projects/01-community/thumbnail-min.jpg',
      image: './images/projects/01-community/cover-min.jpg'
    },
    detailImage: [],
    name: "Students' community(in the university)",
    type: '1',
    time: '2009/03～2010/07',
    content: 'An information sharing platform in my university',
    skill: ['HTML CSS Javascript'],
    myRole: ['2', '4', '5'],
    team: {
      total: 2,
      frontEnd: 1,
      backEnd: 1
    },
    learned: 'Website UI design; How to make a static page by html&css'
  }
];

export default projectEnUS;

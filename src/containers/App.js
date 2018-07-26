import React, { Component } from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import keyIndex from 'react-key-index'
// import LocaleProvider from '@/components/locale-provider'
// import Home from '@/views/home'
import '../assets/stylesheet/css/style.css'

import ImageItem from '../components/ImageItem'

let dataArray = [
  {
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png',
    image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
    title: 'Motorcycle',
    time: '',
    content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,'
    + ' the motorcycle referred to in the mainland, Hong Kong and Southeast'
    + ' Asia known as motorcycles.',
    link: '',
    skill: '',
    team: '',
    selfTask: ''
  }
]

dataArray = keyIndex(dataArray, 1)

/**
 * 获取国际化资源文件
 *
 * @param {any} lang
 * @returns
 */
function getLocale(lang) {
  /* eslint-disable global-require */
  let result = {}
  switch (lang) {
    case 'zh-CN':
      result = require('./locales/zh-Hans')
      break;
    case 'en-US':
      result = require('./locales/en-US')
      break;
    default:
      result = require('./locales/zh-Hans')
  }

  return result.default || result
  /* eslint-enable global-require */
}


class App extends Component {
  state = {
    lang: 'en-US',
    projects: dataArray
  }

  _fetchData = () => {

  }

  render() {
    const {
      projects
    } = this.state
    return (
      <section className="image-list">
        {projects.map(val => <ImageItem val={val} key={val.id} />)}
      </section>
    )
  }
}

export default App

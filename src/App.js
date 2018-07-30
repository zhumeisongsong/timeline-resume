import React, { Component } from 'react';
import keyIndex from 'react-key-index';
import { LocaleProvider } from 'antd';
import { addLocaleData, IntlProvider } from 'react-intl';

import './assets/stylesheet/css/style.css';
import ImageItem from './components/ImageItem';

import {getLocale} from './utils/locale';

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
];

dataArray = keyIndex(dataArray, 1);

let langList = [
  {
    type: 'zh-CN',
    name: '中文'
  },
  {
    type: 'en-US',
    name: 'English'
  },
  {
    type: 'ja-JP',
    name: '日本語'
  }
];

langList = keyIndex(langList, 1);


class App extends Component {
  state = {
    lang: 'ja-JP',
    projects: dataArray
  };

  _fetchData = () => {

  };

  onLangChange = (type) => {
    this.setState({
      lang: type
    });
  };

  render() {
    const {
      lang,
      projects
    } = this.state;
    const appLocale = getLocale(lang);
    addLocaleData(appLocale.data);

    return (<div>
        <LocaleProvider locale={appLocale}>
          <IntlProvider
            locale={appLocale.locale}
            messages={appLocale.messages}
            formats={appLocale.formats}
          >
            <div className="main">
              <header>
                {langList.map(val => (<div key={val.id} onClick={
                    this.onLangChange.bind(this, val.type)}>
                    {val.name}
                  </div>)
                )}
              </header>
              <section className="image-list">
                {projects.map(val => <ImageItem key={val.id} val={val}/>)}
              </section>
              <footer>
                2018@D.S.SHOW
              </footer>
            </div>
          </IntlProvider>
        </LocaleProvider>
      </div>
    );
  }
}

export default App

import React, {Component} from 'react';
import keyIndex from 'react-key-index';
import {LocaleProvider} from 'antd';
import {addLocaleData, IntlProvider} from 'react-intl';

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
]

dataArray = keyIndex(dataArray, 1)


class App extends Component {
  state = {
    lang: 'en-US',
    projects: dataArray
  };

  _fetchData = () => {

  };


  /**
   * 切换语言
   *
   * @param {any} index 语言序号
   */
  onLangChange = (index) => {
    const lang = index === 0 ? 'en-US' : 'zh-CN';
    this.setState({
      lang,
    });
  }

  render() {
    const {
      lang,
      projects
    } = this.state;
    const appLocale = getLocale(lang);
    console.log(appLocale)
    addLocaleData(appLocale.data);

    return (<div>
        <LocaleProvider locale={appLocale}>
          <IntlProvider
            locale={appLocale.locale}
            messages={appLocale.messages}
            formats={appLocale.formats}
          >
            <div>
              <header>
                <p>中文</p>
                <p>english</p>
                <p>日本语</p>
              </header>
              <section className="image-list">
                {projects.map(val => <ImageItem val={val} key={val.id}/>)}
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

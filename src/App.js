import React, {Component} from 'react';
import keyIndex from 'react-key-index';
import {LocaleProvider} from 'antd';
import {addLocaleData, IntlProvider} from 'react-intl';

import RouteConfig from './router/index';

import './assets/stylesheet/css/style.css';


import {getLocale} from './utils/locale';

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
    lang: 'ja-JP'
  };

  _fetchData = () => {

  };

  onLangChange = (type) => {
    this.setState({
      lang: type
    });
  };

  render() {
    console.log(langList)
    const {
      lang,
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
            <div>
              <header>
                {langList.map(val => (<div key={val._typeId} onClick={
                    this.onLangChange.bind(this, val.type)}>
                    {val.name}
                  </div>)
                )}
              </header>
              <div className="main">
                <RouteConfig/>
              </div>
              <footer>2018@D.S.SHOW</footer>
            </div>
          </IntlProvider>
        </LocaleProvider>
      </div>
    );
  }
}

export default App

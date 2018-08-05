import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {LocaleProvider} from 'antd';
import {addLocaleData, IntlProvider} from 'react-intl';

import './assets/stylesheet/css/style.css';

import {getLocale} from './utils/locale';
import {setQuery} from './utils/url';
import {langList} from './constants/config';

import Top from './containers/Top';

class App extends Component {
  state = {
    lang: 'ja-JP'
  };

  onLangChange(val) {
    console.log(val)
    // let params = {
    //   lang: val.lang
    // };
    this.setState({
      lang: val.type
    });
    document.documentElement.lang = val.lang; // set mew lang attribute
    // window.location.search = setQuery(params);
  };

  render() {
    const {
      lang,
    } = this.state;
    const appLocale = getLocale(lang);
    addLocaleData(appLocale.data);

    return (
      <LocaleProvider locale={appLocale.antd}>
        <IntlProvider
          locale={appLocale.locale}
          messages={appLocale.messages}
          formats={appLocale.formats}
        >
          <div className="body-container">
            <header className="main-header">
              <div className="wrapper">
                {langList.map(val => (
                  <div
                    className="item"
                    key={val._typeId}
                    onClick={() => this.onLangChange(val)}
                  >
                    {val.name}
                  </div>)
                )}
              </div>
            </header>

            <div className="main">
              <Top
                defaultData={appLocale}
              />
            </div>
            <footer className="main-footer">
              <span>D.S.SHOW</span>© 2018
            </footer>
          </div>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default App

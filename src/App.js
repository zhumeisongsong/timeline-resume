import React, {Component} from 'react';
import {LocaleProvider} from 'antd';
import {addLocaleData, IntlProvider} from 'react-intl';
import _ from 'lodash';

import './assets/stylesheet/css/style.css';

import {getLocale} from './utils/locale';
import {setQuery, getQuery} from './utils/url';
import {langList} from './constants/config';

import Top from './containers/Top';

import {getProjects, getSkill, getIntroduction} from './api';

class App extends Component {
  state = {
    projects: [],
    skill: [],
    introduction: [],
    lang: '',
    activeLang: ''
  };

  _fetchData = async function (lang) {
    let introduction = await getIntroduction(lang);
    let skill = await getSkill();
    let projects = await getProjects(lang);

    this.setState({
      projects,
      skill,
      introduction
    })
  };

  componentDidMount() {
    let params = getQuery(window.location.search);
    let index = _.findIndex(langList, {lang: params.lang});
    let locale = params.lang ? langList[index].type : 'ja-JP';

    // fetch server data
    this._fetchData(locale);

    this.setState({
      lang: locale,
      activeLang: params.lang ? params.lang : 'ja'
    });
  }

  componentWillUnmount() {
    // remove any timers or listeners created in life span of the component
  }

  onLangChange = (val) => {
    let params = {
      lang: val.lang
    };
    this.setState({
      lang: val.type
    });
    document.documentElement.lang = val.lang; // set new lang attribute
    window.location.search = setQuery(params);
  };

  render() {
    const {
      lang,
      skill,
      introduction,
      projects,
      activeLang
    } = this.state;
    const appLocale = getLocale(lang);
    addLocaleData(appLocale.data);

    const topProps = {
      defaultData: appLocale,
      ref: 'fetchData',
      introduction,
      skill,
      projects
    };

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
                    className={"item " + (activeLang === val.lang ? "active" : '')}
                    key={val._typeId}
                    onClick={() => this.onLangChange(val)}
                  >
                    {val.name}
                  </div>)
                )}
              </div>
            </header>

            <div className="main">
              <Top {...topProps}/>
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

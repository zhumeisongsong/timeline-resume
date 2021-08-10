import React, { useReducer } from 'react';
import queryString from 'query-string';
import jaJP from './jaJP';
import enUS from './enUS';

export const langLocales: any = {
  en: enUS,
  ja: jaJP
};

const getTranslate =
  (langCode: any) =>
  (key: string): any =>
    langLocales[langCode][key] || key;

const parsed = queryString.parse(window.location.search);

const initialState = {
  langCode: parsed.lang || 'ja',
  translate: getTranslate(parsed.lang || 'ja')
};

export const I18nContext = React.createContext(initialState);

export default ({ children, lang }: any) => {
  /* This is where magic starts to happen. We're creating
  a reducer to manage the global state which will sit in
  I18nContext. For now, the only action we will have
  is setting language */
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'setLanguage':
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload)
        };
      default:
        return { ...initialState };
    }
  };

  /* useReducer hook receives a reducer and an initialState to
  return the current state object with a dispatch method to
  dispatch actions. */

  const [state, dispatch]: any = useReducer(reducer, { ...initialState });

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};

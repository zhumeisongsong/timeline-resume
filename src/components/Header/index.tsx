import React, { useMemo, useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';
import { langType } from '../..//constants/';

import './index.scss';

const Header = () => {
  const [activeLang, setActiveLang]: any = useState('');
  const onLangChange = useCallback((lang) => {
    window.location.search = queryString.stringify({ lang });
  }, []);

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    const lang = (parsed.lang || 'ja').toString();

    document.documentElement.lang = lang;
    setActiveLang(lang);
  }, []);

  return useMemo(
    () => (
      <header className="header-container">
        <div className="wrapper">
          {langType.map((item) => (
            <div
              className={
                'item link ' + (activeLang === item.lang ? 'active' : '')
              }
              key={item.id}
              onClick={() => onLangChange(item.lang)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </header>
    ),
    [activeLang, onLangChange]
  );
};

export default Header;

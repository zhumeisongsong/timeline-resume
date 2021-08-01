import React, { useMemo, useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';
import { langType } from '../..//constants/';

const Header = () => {
  const [activeLang, setActiveLang]: any = useState('');
  const onLangChange = useCallback((lang) => {
    window.location.search = queryString.stringify({ lang });
  }, []);

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);

    setActiveLang(parsed.lang || 'ja');
  }, []);

  return useMemo(
    () => (
      <header className="main-header">
        <div className="wrapper">
          {langType.map((item) => (
            <div
              className={'item ' + (activeLang === item.lang ? 'active' : '')}
              key={item.id}
              onClick={() => onLangChange(item.lang)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </header>
    ),
    [activeLang]
  );
};

export default Header;

import React, { useMemo, useCallback } from 'react';
import { langType } from '../..//constants/';

const Header = () => {
  const onLangChange = useCallback((item) => {}, []);

  return useMemo(
    () => (
      <header className="main-header">
        <div className="wrapper">
          {langType.map((item) => (
            <div
              className={'item ' + ('activeLang' === item.lang ? 'active' : '')}
              key={item.id}
              onClick={() => onLangChange(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </header>
    ),
    []
  );
};

export default Header;

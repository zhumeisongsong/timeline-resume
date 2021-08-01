import React, { useMemo, useContext } from 'react';
import ImageItem from '../../components/ImageItem';
import Introduction from '../../components/Introduction';
import Skill from '../../components/Skill';
import Contact from '../../components/Contact';
import Detail from '../../components/Detail';
import { I18nContext } from '../../locales';

const Top = () => {
  const { translate } = useContext(I18nContext);

  return useMemo(
    () => (
      <div className="top-container">
        {translate('intro.hello')}
        <Introduction />
        <Skill />
        <Contact />
      </div>
    ),
    []
  );
};

export default Top;

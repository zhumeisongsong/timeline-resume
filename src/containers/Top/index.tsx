import React, { useMemo, useState, useEffect, useCallback } from 'react';
import Introduction from '../../components/Introduction';
import Skill from '../../components/Skill';
import Contact from '../../components/Contact';
import ImageItem from '../../components/ImageItem';
import Detail from '../../components/Detail';

const Top = () => {
  return useMemo(
    () => (
      <div className="top-container">
        <Introduction />
        <Skill />
        <Contact />
      </div>
    ),
    []
  );
};

export default Top;

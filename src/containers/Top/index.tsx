import React, { useMemo, useState, useEffect, useCallback } from 'react';
import Introduction from '../../components/Introduction';
import Project from '../../components/Project';
import Skill from '../../components/Skill';
import Contact from '../../components/Contact';



const Top = () => {
  return useMemo(
    () => (
      <div className="top-container">
        <Introduction />
        <Project/>
        <Skill />
        <Contact />
      </div>
    ),
    []
  );
};

export default Top;

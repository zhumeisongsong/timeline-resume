import React, { useMemo } from 'react';
import Introduction from '../../components/Introduction';
import ProjectList from '../../components/ProjectList';
import Skill from '../../components/Skill';
import Contact from '../../components/Contact';

const Top = () => {
  return useMemo(
    () => (
      <div className="top-container">
        <Introduction />
        {/* <ProjectList /> */}
        <Skill />
        <Contact />
      </div>
    ),
    []
  );
};

export default Top;

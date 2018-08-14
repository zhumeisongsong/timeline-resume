import React from 'react';

const Introduction = (props,{location}) => (
  <div>
    {console.log(location)}
    {console.log(props.data)}
  </div>
);

export default Introduction;
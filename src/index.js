import React from 'react';
import {render} from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

render(
  <App />,
  /* eslint-disable no-undef */
  document.getElementById('root')
);

registerServiceWorker();


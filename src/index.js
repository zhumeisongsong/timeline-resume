import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

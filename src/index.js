import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {IntlProvider} from 'react-intl'

import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider>
    <IntlProvider locale="en">
      <App/>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

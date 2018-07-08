import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {IntlProvider, addLocaleData} from 'react-intl'
import LocaleProvider from './components/LocaleProvider'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

import {getLocale} from './util/locale'

const appLocale = getLocale('en-US')
addLocaleData(...appLocale.data)

render(
  <Provider>
    <LocaleProvider locale={appLocale}>
      <IntlProvider
        locale={appLocale.locale}
        messages={appLocale.messages}
        formats={appLocale.formats}
      >
        <App/>
      </IntlProvider>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

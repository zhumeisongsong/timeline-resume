import React from 'react'
import { render } from 'react-dom'
import { LocaleProvider } from 'antd'
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl'
import registerServiceWorker from './registerServiceWorker'

import App from './containers/App'

const appLocale = window.appLocale
addLocaleData(appLocale.data)

render(
  <LocaleProvider locale={appLocale.antd}>
    <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
      <App />
    </IntlProvider>
  </LocaleProvider>,
  /* eslint-disable no-undef */
  document.getElementById('root'))
registerServiceWorker()


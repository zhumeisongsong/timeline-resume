import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NoMatch from '../components/common/NoMatch'
import Top from '../containers/Top'
import Detail from '../containers/Detail'

const host = ''

const routes = [
  {
    exact: true,
    path: host + '/projects/:id',
    component: Detail
  },
  {
    exact: true,
    path: host + '/',
    component: Top,
    onEnter: () => {
      console.log('enter')
    }
  },
  {
    exact: false,
    component: NoMatch
  }
]

const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    onEnter={route.onEnter}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}/>
    )}
  />
)

const RouteConfig = () => (
  <Router>
    <div>
      <Switch>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
      </Switch>
    </div>
  </Router>
)

export default RouteConfig
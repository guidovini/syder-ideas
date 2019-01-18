import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from 'components/App'
import CreateIdea from 'components/CreateIdea'
import NotFoundPage from 'components/NotFoundPage'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/create-idea' component={CreateIdea} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
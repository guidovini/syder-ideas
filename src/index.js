import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from 'components/App'
import CreateIdea from 'components/CreateIdea'
import NotFoundPage from 'components/NotFoundPage'
import CreateIdeaName from 'components/CreateIdeaName'
import CreateIdeaDescription from 'components/CreateIdeaDescription'
import CreateIdeaDone from 'components/CreateIdeaDone'
import Dashboard from 'components/Dashboard'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/create-idea' component={CreateIdea} />
      <Route path='/create-idea-name' component={CreateIdeaName} />
      <Route path='/create-idea-description' component={CreateIdeaDescription} />
      <Route path='/create-idea-done' component={CreateIdeaDone} />
      <Route path='/dashboard' component={Dashboard} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
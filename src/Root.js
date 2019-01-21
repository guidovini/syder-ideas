import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from 'components/App'
import AddIdea from 'components/AddIdea'
import NotFoundPage from 'components/NotFoundPage'
import Done from 'components/Done'
import Dashboard from 'components/Dashboard'
import AddIdeaInfo from 'components/AddIdeaInfo'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' component={App} exact />
        <Route path='/create' component={AddIdea} />
        <Route path='/edit/:id' component={AddIdeaInfo} />
        <Route path='/done' component={Done} />
        <Route path='/dashboard' component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
)

export default Root
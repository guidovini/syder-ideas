import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from 'components/App'
import AddIdea from 'components/Ideas/AddIdea'
import NotFoundPage from 'components/NotFoundPage'
import Done from 'components/Done'
import Dashboard from 'components/Dashboard'
import AddIdeaDescription from 'components/Ideas/AddIdeaDescription'
import Content from 'components/Content'
import IdeaFeaturesEdit from 'components/Menu/IdeaFeaturesEdit'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' component={App} exact />
        <Route path='/create' component={AddIdea} exact/>
        <Route path='/create/:id' component={AddIdeaDescription} />
        <Route path='/idea/:id' component={Content} />
        <Route path='/edit/:option/:id' component={IdeaFeaturesEdit} />
  
        <Route path='/done' component={Done} />
        <Route path='/dashboard' component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
)

export default Root
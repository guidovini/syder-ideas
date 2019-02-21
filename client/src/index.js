import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../node_modules/bulma/css/bulma.css'

import configureStore from 'store/configureStore'
import AppRouter from 'routes/AppRouter'
import { startSetIdeas } from 'actions/ideas'
import { startSetFeatures } from 'actions/features'
import LoadingPage from 'components/LoadingPage'

const store = configureStore()

// store.subscribe(() => {
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

store.dispatch(startSetIdeas())
  .then(store.dispatch(startSetFeatures()))
    .then(() => {
      renderApp()
    })
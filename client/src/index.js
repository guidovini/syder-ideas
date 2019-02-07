import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../node_modules/bulma/css/bulma.css'

import configureStore from 'store/configureStore'
import AppRouter from 'router/AppRouter'

const store = configureStore()

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
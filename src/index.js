import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import '../node_modules/bulma/css/bulma.css'

import Root from 'Root'
import reducers from 'reducers'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
  reducers,
  persistedState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


ReactDOM.render(<Root store={store}/>, document.getElementById('app'))
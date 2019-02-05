import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import '../node_modules/bulma/css/bulma.css'

import Root from 'Root'
import reducers from 'reducers'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const store = createStore(
  reducers,
  persistedState, 
  componseEnhancers(applyMiddleware(thunk))
)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(<Root store={store}/>, document.getElementById('app'))
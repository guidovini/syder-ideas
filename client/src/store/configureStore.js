import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from 'reducers'

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

export default () => {
  // const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

  const store = createStore(
    reducers,
    // persistedState, 
    componseEnhancers(applyMiddleware(thunk))
  )

  return store
}
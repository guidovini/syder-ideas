import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from 'reducers'

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

export default () => {

  const store = createStore(
    reducers,
    componseEnhancers(applyMiddleware(thunk))
  )

  return store
}
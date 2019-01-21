import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Root from 'Root'
import reducers from 'reducers'

const store = createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Root store={store}/>, document.getElementById('app'))
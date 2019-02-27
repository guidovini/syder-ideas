import appReducer from 'reducers/app'
import { USER_LOGOUT } from 'actions/types'

export default (state, action) => {
  // Solution https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
  if (action.type === USER_LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}
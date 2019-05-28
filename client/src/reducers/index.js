import { USER_LOGOUT } from '../actions/types';
import appReducer from './app';

export default (state, action) => {
  // Solution https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
  if (action.type === USER_LOGOUT) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

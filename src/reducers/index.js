import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import questions from './questions';
import authedUser from './authedUser';
import users from './users';

export default combineReducers({
  loadingBar: loadingBarReducer,
  questions,
  authedUser,
  users
})
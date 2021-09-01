import { combineReducers } from 'redux';
import userObject from './appiontments';
import authReducer from './auth';

const rootReducer = combineReducers({
  userObject,
  authReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import userObject from './appiontments';
import authReducer from './auth';
import GetUrgents from './GetUrgents';

const rootReducer = combineReducers({
  userObject,
  authReducer,
  GetUrgents,
});

export default rootReducer;

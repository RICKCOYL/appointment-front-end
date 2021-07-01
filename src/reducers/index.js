import { combineReducers } from 'redux';
import appointment from './appiontments';
import authReducer from './auth';

const rootReducer = combineReducers({
  appointment,
  authReducer,

});

export default rootReducer;

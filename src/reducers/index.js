import { combineReducers } from 'redux';
import appointment from './appiontments';
import authReducer from './auth';
import doctor from './doctor';

const rootReducer = combineReducers({
  appointment,
  authReducer,
  doctor,

});

export default rootReducer;

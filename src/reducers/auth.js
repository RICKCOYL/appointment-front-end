/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-case-declarations */
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { NotificationManager } from 'react-notifications';
import {
  SIGN_UP, SIGN_IN, SIGN_OUT,
} from '../actions/action';

const initialState = {
  token: localStorage.getItem('token', null),
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
      toast('Welcome...', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        id: user.user_id,
      };
    case SIGN_OUT:
      localStorage.removeItem('token');
      toast('Goodbye...', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        token: null,
        id: null,
      };
    default:
      return state;
  }
};

export default authReducer;

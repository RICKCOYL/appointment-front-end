/* eslint-disable no-case-declarations */
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { SIGN_UP } from '../actions/action';

const initialState = {
  token: localStorage.getItem('token', null),
  id: null,
  username: null,
  email: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      toast('Welcome', {
        position: toast.POSITION.TOP_RIGHT,
      });
      const user = jwtDecode(action);

      return {
        ...initialState,
        token: action.token,
        id: user.user_id,
        username: user.username,
        email: user.email,

      };
    default:
      return state;
  }
};

export default authReducer;

/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import axios from 'axios';
import { toast } from 'react-toastify';
import { loginUser, SIGN_UP, SIGN_IN } from './actions/action';

const apiUrl = 'http://localhost:3000';

export const createUser = (user) => (dispatch) => {
  axios
    .post(`${apiUrl}/signup`, user)
    .then((token) => {
      console.log(token);
      localStorage.setItem('token', token.data.auth_token);

      dispatch({
        type: SIGN_UP,
        token: token.data.auth_token,
      });
    })
    .catch((error) => {
      console.log(error.response);

      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

export const login = (cred) => (dispatch) => {
  axios
    .post(`${apiUrl}/auth/login`, cred)
    .then((token) => {
      console.log(token);
      localStorage.setItem('token', token.data.auth_token);

      dispatch({
        type: SIGN_IN,
        token: token.data.auth_token,
      });
    })
    .catch((error) => {
      console.log(error.response);

      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};



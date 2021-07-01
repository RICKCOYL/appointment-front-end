/* eslint-disable no-unused-expressions */import axios from 'axios';
import { toast } from 'react-toastify';
import {
  SIGN_UP, SIGN_IN,
} from './action';

const apiUrl = 'http://localhost:3000/';

export const createUser = (user) => (dispatch) => {
  axios
    .post(`${apiUrl}/signup`, user)
    .then((token) => {
      localStorage.setItem('token', token.data.auth_token);

      dispatch({
        type: SIGN_UP,
        token: token.data.auth_token,
      });
    })
    .catch((error) => {
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

export const login = (cred) => (dispatch) => {
  axios
    .post(`${apiUrl}/auth/login`, cred)
    .then((token) => {
      localStorage.setItem('token', token.data.auth_token);

      dispatch({
        type: SIGN_IN,
        token: token.data.auth_token,
      });
    })
    .catch((error) => {
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

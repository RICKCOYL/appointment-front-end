/* eslint-disable no-unused-expressions */import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import {
  SIGN_UP, SIGN_IN,
} from './action';

const apiUrl = 'https://appoinment-api.herokuapp.com';

export const createUser = (user) => (dispatch) => {
  axios
    .post(`${apiUrl}/signup`, user)
    .then((token) => {
      localStorage.setItem('token', token.data.auth_token);

      dispatch({
        type: SIGN_UP,
        token: token.data.auth_token,
      });
      NotificationManager.success('Successfully signed up');
    })
    .catch((error) => {
      NotificationManager.error(error.response.data.message);
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
      NotificationManager.success('Successfully logged in');
    })
    .catch((error) => {
      NotificationManager.error(error.response.data.message);
    });
};

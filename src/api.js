/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import axios from 'axios';
import { toast } from 'react-toastify';
import { loginUser, SIGN_UP } from './actions/action';

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

// export function createUser(userinfo) {
//  return (dispatch) => fetch(`${apiUrl}/signup`, {
//    method: 'POST',
//    mode: 'cors',
//    cache: 'no-cache',
//    credentials: 'same-origin',
//    headers: {
//      Accept: 'application/json',
//      'Content-Type': 'application/json',
//    },
//    body: JSON.stringify(userinfo),
//  }).then((r) => console.log(r) && r.json())
//    .then((data) => {
//      console.log(data);
//      if (data.error) {
//        alert(data.error);
//      } else {
//        localStorage.setItem('token', data.jwt);
//        dispatch(loginUser(data.user));
//      }
//    });
// }

export function loginUserFetch(userInfo) {
  return (dispatch) => fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        const userJson = JSON.parse(data.user);
        localStorage.setItem('token', data.jwt);
        dispatch(loginUser(userJson));
      }
    });
}

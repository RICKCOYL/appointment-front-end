/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ADD_BOOK, GET_BOOKS, DELETE_BOOK, ADD_URGENCY, UPDATE_URGENCY,
  GET_URGENCY,
} from './action';

const apiUrl = 'http://localhost:3000/';

export const setHeaders = () => {
  const headers = {
    headers: {
      authorization: localStorage.getItem('token'),
      // 'Content-Type': 'application/json',
    },
  };

  return headers;
};

export const addBook = (book) => (dispatch) => {
  console.log(book);
  axios
    .post(`${apiUrl}bookings`, book, setHeaders())
    .then((token) => {
      dispatch({
        type: ADD_BOOK,
        token: token.data,
      });
    })
    .catch((error) => {
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

export const getBooks = () => (dispatch) => {
  axios
    .get(`${apiUrl}bookings`, setHeaders())
    .then((books) => {
      dispatch({
        type: GET_BOOKS,
        books,
      });
    })
    .catch((error) => error.response.data);
};

export const deleteBooking = (id) => (dispatch) => {
  axios
    .delete(`${apiUrl}bookings/${id}`, setHeaders())
    .then(() => {
      dispatch({
        type: DELETE_BOOK,
        id,
      });
    })
    .catch((error) => {
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

export const urgencyState = (doc) => (dispatch) => {
  axios
    .post(`${apiUrl}urgents`, doc, setHeaders())
    .then((token) => {
      dispatch({
        type: ADD_URGENCY,
        token: token.data,
      });
    })
    .catch((error) => {
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

export const updateChecked = (check) => (dispatch) => {
  console.log(check);
  // axios
  //   .patch(`${apiUrl}bookings/${check.id}`, check, setHeaders())
  //   .then(() => {
  //     dispatch({
  //       type: UPDATE_URGENCY,
  //       check,
  //     });
  //   })
  //   .catch((error) => {
  //     toast.error(error.response?.data, {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //     });
  //   });
};

export const getUrgency = () => (dispatch) => {
  axios
    .get(`${apiUrl}urgents`, setHeaders())
    .then((urgency) => {
      dispatch({
        type: GET_URGENCY,
        urgency,
      });
    })
    .catch((error) => error.response.data);
};

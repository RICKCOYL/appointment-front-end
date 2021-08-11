/* eslint-disable no-console */
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ADD_BOOK, GET_BOOKS, DELETE_BOOK, DOCTOR_NAME,
} from './action';

const apiUrl = 'http://localhost:3000/';

export const setHeaders = () => {
  const headers = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  };

  return headers;
};

export const addBook = (book) => (dispatch) => {
  axios
    .post(`${apiUrl}bookings`, book, setHeaders())
    .then((token) => {
      dispatch({
        type: ADD_BOOK,
        token: token.data.auth_token,
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
    .catch((error) => {
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
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

export const doctorName = (doc) => (dispatch) => {
  console.log(doc);
  axios
    .get(`${apiUrl}doctors`, doc, setHeaders())
    .then((doctor) => {
      dispatch({
        type: DOCTOR_NAME,
        doctor,
      });
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

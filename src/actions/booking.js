/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ADD_BOOK, GET_BOOKS, DELETE_BOOK, ADD_URGENCY,
  GET_URGENCY, DELETE_URGENCY,
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
    .post(`${apiUrl}listings`, book, setHeaders())
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
    .get(`${apiUrl}listings`, setHeaders())
    .then((books) => {
      console.log('this are', books);
      dispatch({
        type: GET_BOOKS,
        payload: books.data,
      });
    })
    .catch((error) => error.response.data);
};

export const removeBook = (bookId) => (dispatch) => {
  axios
    .delete(`${apiUrl}listings/${bookId}`, setHeaders())
    .then((books) => {
      dispatch({
        type: DELETE_BOOK,
        bookId,
      });
    })
    .catch((error) => error.response.data);
};

export const urgencyState = (doc) => (dispatch) => {
  console.log(doc);
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

export const deleteUrgency = (id) => (dispatch) => {
  axios
    .delete(`${apiUrl}urgents/${id}`, setHeaders())
    .then(() => {
      dispatch({
        type: DELETE_URGENCY,
        id,
      });
    })
    .catch((error) => {
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
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

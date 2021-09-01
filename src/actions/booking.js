import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import {
  ADD_BOOK, GET_BOOKS, DELETE_BOOK,
} from './action';

const apiUrl = 'https://appoinment-api.herokuapp.com/';

export const setHeaders = () => {
  const headers = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  };

  return headers;
};

export const getBooks = () => (dispatch) => {
  axios
    .get(`${apiUrl}listings`, setHeaders())
    .then((books) => {
      dispatch({
        type: GET_BOOKS,
        books,
      });
    })
    .catch((error) => {
      NotificationManager.error(`${error}`);
    });
};

export const addBook = (book) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}listings`, book, setHeaders());
    dispatch({
      type: ADD_BOOK,
      book: response.data,
    });
    dispatch(getBooks());
    NotificationManager.success('Book added successfully');
  } catch (error) {
    NotificationManager.error('Error adding booking');
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}listings/${id}`, setHeaders());
    dispatch({
      type: DELETE_BOOK,
      id,
    });
  } catch (error) {
    NotificationManager.error('Error deleting booking');
  }
};

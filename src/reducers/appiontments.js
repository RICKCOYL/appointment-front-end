import {
  ADD_BOOK, DELETE_BOOK, GET_BOOKS,
} from '../actions/action';

const userObject = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.books.data;
    case ADD_BOOK:
      return [action.books, ...state];
    case DELETE_BOOK:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default userObject;

import { toast } from 'react-toastify';
import { ADD_BOOK, DELETE_BOOK, GET_BOOKS } from '../actions/action';

const appointment = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.books.data;
    case ADD_BOOK:
      toast.success('A todo was added...', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.books.data, ...state];
    case DELETE_BOOK:
      toast.success('A todo was deleted...', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default appointment;

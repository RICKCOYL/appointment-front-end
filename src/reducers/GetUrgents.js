import {
  DELETE_URGENCY,
  GET_URGENCY,
} from '../actions/action';

const GetUrgents = (state = [], action) => {
  switch (action.type) {
    case GET_URGENCY:
      return [action.urgency.data, ...state];
    case DELETE_URGENCY:
      return state.filter((urgency) => urgency.id !== action.urgency.id);
    default:
      return state;
  }
};

export default GetUrgents;

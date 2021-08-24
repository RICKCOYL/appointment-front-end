import {
  GET_URGENCY,
} from '../actions/action';

const GetUrgents = (state = [], action) => {
  switch (action.type) {
    case GET_URGENCY:
      return [action.urgency.data, ...state];

    default:
      return state;
  }
};

export default GetUrgents;

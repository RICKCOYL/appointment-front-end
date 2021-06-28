import { APPOINTMENTS, REMOVE_APPOINTMENTS } from '../actions/action';

const appointment = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case APPOINTMENTS:
      return [...state, payload];
    case REMOVE_APPOINTMENTS:
      return state.filter((e) => e.id !== payload);
    default:
      return state;
  }
};

export default appointment;

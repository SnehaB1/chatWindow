
import { STORECHATDATA, UPDATECHATDATA } from "../constants";


const storeData = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case STORECHATDATA:
      return {
        ...state,
        ...payload
      };

    case UPDATECHATDATA:
      const newState = Object.keys(state).map((index) => {
        if (parseInt(index) === payload.id) {
          return state[index] = payload
        }
        else return { ...state[index] }
      })
      return { ...newState };

    default:
      return state;
  }
};

export default storeData;


import { USER_ORDERS } from "../constants";

const intialState = {
  orders: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case USER_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
}

import { USER_STORE } from "../constants";

const intialState = {
  store: {},
};

export default function (state = intialState, action) {
  switch (action.type) {
    case USER_STORE:
      return {
        ...state,
        store: action.payload,
      };
    default:
      return state;
  }
}

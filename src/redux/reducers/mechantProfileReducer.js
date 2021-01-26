import { USER_PROFILE } from "../constants";

const intialState = {
  user: {},
};

export default function (state = intialState, action) {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

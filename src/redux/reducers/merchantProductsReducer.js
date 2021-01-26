import { USER_PRODUCTS } from "../constants";

const intialState = {
  products: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case USER_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
}

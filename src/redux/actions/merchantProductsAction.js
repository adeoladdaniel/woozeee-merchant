import { USER_PRODUCTS } from "../constants";
import axios from "axios";

export const getUserProducts = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://54.93.155.199:8080/api/v1/products/store-products/${id}`,
   
      {
        headers: {
          channel: "web",
          Authorization: `Bearer ${process.env.REACT_APP_token}`,
        },
      }
    );
    console.log(response.data.data);
    dispatch({
      type: USER_PRODUCTS,
      payload: response.data.data,
    });
  } catch (error) {}
};

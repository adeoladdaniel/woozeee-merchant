import { USER_ORDERS } from "../constants";
import axios from "axios";

export const getUserOrders = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://54.93.155.199:8080/api/v1/orders/merchant",
      {
        headers: {
          channel: "web",
          Authorization: `Bearer ${process.env.REACT_APP_token}`,
        },
      }
    );
    // console.log(response.data.data);
    dispatch({
      type: USER_ORDERS,
      payload: response.data.data,
    });
  } catch (error) {}
};

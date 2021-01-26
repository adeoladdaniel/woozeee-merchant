import { USER_STORE } from "../constants";
import axios from "axios";

export const getUserStore = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://54.93.155.199:8080/api/v1/stores/${id}`,
      {
        headers: {
          channel: "web",
          Authorization: `Bearer ${process.env.REACT_APP_token}`,
        },
      }
    );
    console.log(response.data.data);
    dispatch({
      type: USER_STORE,
      payload: response.data.data,
    });
  } catch (error) {}
};

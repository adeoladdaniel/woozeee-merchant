import { USER_PROFILE } from "../constants";
import axios from "axios";

export const getUserProfile = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://54.93.155.199:8080/api/v1/accounts/profile",
      {
        headers: {
          channel: "web",
          Authorization: `Bearer ${process.env.REACT_APP_token}`,
        },
      }
    );

    console.log(response.data.data);
    dispatch({
      type: USER_PROFILE,
      payload: response.data.data,
    });
  } catch (error) {}
};

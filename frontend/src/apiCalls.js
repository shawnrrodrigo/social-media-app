import axios from "axios";

export const loginCall = async (userCredintial, dispatch) => {
  console.log("uc",userCredintial);
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredintial);
    console.log("res",res);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

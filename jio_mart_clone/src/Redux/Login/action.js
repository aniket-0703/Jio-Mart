import useAPICall from "../../CustomHooks/useAPICall";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from "./actionTypes";

// const {getData, postData } =useAPICall()

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
}; 

export const registerLoading = () => {
  return {
    type: REGISTER_LOADING,
  };
};

export const registerFailure = () => {
  return {
    type: REGISTER_FAILURE,
  };
};

export const logout = () => {
  return {
    type : LOGOUT
  }
}

export const Login = (url) => async (dispatch) => {
  try {
    dispatch(loginLoading());
    console.log(url)
    const res = await fetch(url);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      dispatch(loginSuccess(data));
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    console.log(error);
  }
};

export const regsiter = (url, input) => async (dispatch) => {
  const { postData } = useAPICall();
  dispatch(registerLoading());
  const data = await postData(url, input);
  data ? dispatch(registerSuccess(data)) : dispatch(registerFailure());
};

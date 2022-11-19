import useAPICall from "../../CustomHooks/useAPICall";
import {
  SINGLE_GET_FAILURE,
  SINGLE_GET_REQUEST,
  SINGLE_GET_SUCCESS,
} from "./actionType";

const singleGetRequest = () => {
  return {
    type: SINGLE_GET_REQUEST,
  };
};
const singleGetSuccess = (payload) => {
  return {
    type: SINGLE_GET_SUCCESS,
    payload,
  };
};
const singleGetFailure = () => {
  return {
    type: SINGLE_GET_FAILURE,
  };
};

export const getSingleProduct = (url) => async (dispatch) => {
  const { getData } = useAPICall();
  dispatch(singleGetRequest());
  const data = await getData(url);
  data ? dispatch(singleGetSuccess(data)) : dispatch(singleGetFailure());
};

import { GetData, RemoveData, Setdata } from "../../Utils/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "./actionTypes";

const initState = {
  isAuth: GetData("JioMartCloneUser") || null,
  isLogLoading: false,
  isLogError: false,
  isRegister: null,
  isRegisterLoading: false,
  isRegisterError: false,
};
export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isAuth: null,
        isLogLoading: true,
        isLogError: false,
      };

    case LOGIN_SUCCESS:
      Setdata("JioMartCloneUser", action.payload[0]);
      return {
        ...state,
        isAuth: action.payload[0],
        isLogLoading: true,
        isLogError: false,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: null,
        isLogLoading: true,
        isLogError: false,
      };

    case REGISTER_LOADING:
      return {
        ...state,
        isRegisterLoading: true,
        isRegister: null,
        isRegisterError: false,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: action.payload,
        isRegisterLoading: false,
        isRegisterError: false,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        isRegisterError: true,
        isRegisterLoading: false,
        isRegister: null,
      };

    case LOGOUT:
      RemoveData("JioMartCloneUser");
      return {
        ...state,
        isAuth: null,
        isLogLoading: false,
        isLogError: false,
      };

    default:
      return state;
  }
};

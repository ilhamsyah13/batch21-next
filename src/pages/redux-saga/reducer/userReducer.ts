import * as ActionType from "../constant/userConstant";
import { getCookie } from "cookies-next";

const getFromCookies = (key: any) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return getCookie(key);
};

const INIT_STATE = {
  userProfile: getFromCookies("profile")
    ? JSON.parse(getCookie("profile"))
    : null,
  userSignup: null,
};

const UserReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.SIGNIN_REQUEST:
      return state;
    case ActionType.SIGNIN_SUCCESS:
      return signinSuccess(state, action);
    case ActionType.SIGNUP_REQUEST:
      return state;
    case ActionType.SIGNUP_SUCCESS:
      return signupsuccess(state, action);
    case ActionType.SIGNOUT_REQUEST:
      return state;
    case ActionType.SIGNOUT_SUCCESS:
      return signoutsuccess(state, action);
    case ActionType.MESSAGE_NOTIFICATION:
      return showMessage(state, action);
    default:
      return state;
  }
};

const signinSuccess = (state: any, action: any) => {
  return {
    ...state,
    userProfile: action.payload,
    message: "",
  };
};

const signupsuccess = (state: any, action: any) => {
  return {
    ...state,
    userSignup: action.payload,
  };
};

const signoutsuccess = (state: any, action: any) => {
  return {
    ...state,
    userProfile: null,
    userSignin: null,
    message: "",
  };
};

const showMessage = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    message: payload.message,
  };
};

export default UserReducer;

import * as ActionType from "../constant/userConstant";

export const doSignupRequest = (payload: any) => ({
  type: ActionType.SIGNUP_REQUEST,
  payload,
});

export const doSignupSuccess = (payload: any) => ({
  type: ActionType.SIGNUP_SUCCESS,
  payload,
});

export const doSigninRequest = (payload: any) => ({
  type: ActionType.SIGNIN_REQUEST,
  payload,
});

export const doSigninSuccess = (payload: any) => ({
  type: ActionType.SIGNIN_SUCCESS,
  payload,
});

export const doSignoutRequest = (payload: any) => ({
  type: ActionType.SIGNOUT_REQUEST,
  payload,
});

export const doSignoutSuccess = (payload: any) => ({
  type: ActionType.SIGNOUT_SUCCESS,
  payload,
});

export const doMessageNotif = (payload: any) => ({
  type: ActionType.MESSAGE_NOTIFICATION,
  payload,
});

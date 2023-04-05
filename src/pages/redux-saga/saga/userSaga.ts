import { call, put } from "redux-saga/effects";
import UserApi from "../../../api/User";
import {
  doSigninSuccess,
  doSignupSuccess,
  doMessageNotif,
  doSignoutSuccess,
} from "../action/userAction";
import { setCookie, deleteCookie } from "cookies-next";

function* handleSignup(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserApi.signup, payload);
    yield put(doSignupSuccess(result.data));
  } catch (error) {
    yield put(doMessageNotif(error));
  }
}

function* handleSignin(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserApi.signin, payload);
    if (Object.keys(result.data).length === 0) {
      yield put(
        doMessageNotif({ message: "user or password not match, try again" })
      );
    } else {
      setCookie("access_token", result.data.access_token);
      const profile = yield call(UserApi.profile);
      setCookie("profile", JSON.stringify(profile.data));
      yield put(doSigninSuccess(profile.data));
    }
  } catch (error) {
    yield put(doMessageNotif(error));
  }
}

function* handleSignout() {
  try {
    deleteCookie("access_token");
    deleteCookie("profile");
    yield put(doSignoutSuccess({ message: "user log out" }));
  } catch (error) {
    yield put(doMessageNotif(error));
  }
}

export { handleSignin, handleSignout, handleSignup };

import { takeEvery, all } from "redux-saga/effects";
import * as ActionRegion from "../constant/regionConstant";
import * as ActionUser from "../constant/userConstant";
import {
  handleRegion,
  handleAddRegion,
  findRegion,
  editRegion,
  deleteRegion,
} from "./regionSaga";
import { handleSignin, handleSignout, handleSignup } from "./userSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionRegion.GET_DATA_REQUEST, handleRegion),
    takeEvery(ActionRegion.ADD_DATA_REQUEST, handleAddRegion),
    takeEvery(ActionRegion.FIND_DATA_REQUEST, findRegion),
    takeEvery(ActionRegion.EDIT_DATA_REQUEST, editRegion),
    takeEvery(ActionRegion.DEL_DATA_REQUEST, deleteRegion),
    takeEvery(ActionUser.SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionUser.SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionUser.SIGNOUT_REQUEST, handleSignout),
  ]);
}

export default watchAll;

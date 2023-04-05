import { call, put } from "redux-saga/effects";
import RegionApi from "../../../api/Region";
import {
  GetRegionSuccess,
  GetRegionFailed,
  AddRegionSuccess,
  AddRegionFailed,
  FindRegionSuccess,
  FindRegionFailed,
  EditRegionSuccess,
  EditRegionFailed,
  DelRegionSuccess,
  DelRegionFailed,
} from "../action/regionAction";

function* handleRegion(): any {
  try {
    const result = yield call(RegionApi.getData);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFailed(error));
  }
}

function* handleAddRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.upload, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFailed(error));
  }
}

function* findRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.findData, payload);
    yield put(FindRegionSuccess(result));
  } catch (error) {
    yield put(FindRegionFailed(error));
  }
}

function* editRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.updatePhoto, payload);
    yield put(EditRegionSuccess(result.data));
  } catch (error) {
    yield put(EditRegionFailed(error));
  }
}

function* deleteRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.deleted, payload);
    yield put(DelRegionSuccess(result.data));
  } catch (error) {
    yield put(DelRegionFailed(error));
  }
}

export { handleRegion, handleAddRegion, findRegion, editRegion, deleteRegion };

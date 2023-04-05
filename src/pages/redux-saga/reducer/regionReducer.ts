import * as ActionType from "../constant/regionConstant";

const INIT_STATE = {
  regions: [],
  region: [],
};

const RegionReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_DATA_REQUEST:
      return { ...state };
    case ActionType.GET_DATA_SUCCESS:
      return GetRegionSuccessfully(state, action);
    case ActionType.ADD_DATA_REQUEST:
      return { ...state };
    case ActionType.ADD_DATA_SUCCESS:
      return AddRegionSuccessfully(state, action);
    case ActionType.FIND_DATA_REQUEST:
      return { ...state };
    case ActionType.FIND_DATA_SUCCESS:
      return FindRegionSuccessfully(state, action);
    case ActionType.EDIT_DATA_REQUEST:
      return { ...state };
    case ActionType.EDIT_DATA_SUCCESS:
      return EditRegionSuccessfully(state, action);
    case ActionType.DEL_DATA_REQUEST:
      return { ...state };
    case ActionType.DEL_DATA_SUCCESS:
      return DelRegionSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetRegionSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const AddRegionSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    regions: [...state.regions, payload],
  };
};

const FindRegionSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    region: payload,
  };
};

const EditRegionSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelRegionSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default RegionReduce;

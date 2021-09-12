import { combineReducers } from "redux";
import OanTuXiReducer from "./OanTuXiReducer";
const rootReducer = combineReducers({
  //Tập hợp tất cả các reducer con ở đây
  OanTuXiReducer,
});
export default rootReducer;

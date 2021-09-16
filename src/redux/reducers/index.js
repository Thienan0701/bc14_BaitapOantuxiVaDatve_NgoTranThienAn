import { combineReducers } from "redux";
import OanTuXiReducer from "./OanTuXiReducer";
import BookingTicketReducer from "./BookingTicketReducer";
const rootReducer = combineReducers({
  //Tập hợp tất cả các reducer con ở đây
  OanTuXiReducer,
  BookingTicketReducer,
});
export default rootReducer;

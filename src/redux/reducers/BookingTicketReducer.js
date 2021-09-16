import * as actType from "./../constants";
const initialState = {
  danhSachGheDangDat: [{ soGhe: "A1", gia: 75000, daDat: false }],
};
const BookingTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.GET_GHE_DAT: {
      // console.log(danhSachGheDangDatUpdate);
      // state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = state.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        //Nếu ghế đã có trong mảng đặt sẽ được remove khỏi mảng
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // danhSachGheDangDatUpdate = [
        //   ...state.danhSachGheDangDat,
        //   action.payload,
        // ];
        danhSachGheDangDatUpdate.push(action.payload);
      }

      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case actType.HUY_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = state.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload
      );
      if (index !== -1) {
        //Nếu ghế đã có trong mảng đặt sẽ được remove khỏi mảng
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default BookingTicketReducer;

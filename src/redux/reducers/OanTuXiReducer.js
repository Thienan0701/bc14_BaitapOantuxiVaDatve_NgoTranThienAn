import * as actType from "./../constants";
const initialState = {
  mangHinh: [
    { id: "keo", hinhAnh: "./img/gameoantuxi/keo.png", datCuoc: true },
    { id: "bua", hinhAnh: "./img/gameoantuxi/bua.png", datCuoc: false },
    { id: "bao", hinhAnh: "./img/gameoantuxi/bao.png", datCuoc: false },
  ],
  ketQua: "you saved the world,i love you 3000",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { id: "bao", hinhAnh: "./img/gameoantuxi/keo.png", datCuoc: false },
};

const OanTuXiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.GET_CUOC: {
      console.log(action.payload);
      let mangHinhUpdate = [...state.mangHinh];
      mangHinhUpdate = mangHinhUpdate.map((item) => {
        if (item.id === action.payload) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangHinh = mangHinhUpdate;
      return { ...state };
    }
    case actType.GET_PLAY_RANDOM: {
      //let mangHinh = [...state.mangHinh];
      let randNum = Math.floor(Math.random() * 3);
      let DatCuocNgauNhien = state.mangHinh[randNum];
      state.computer = DatCuocNgauNhien;
      return { ...state };
    }
    case actType.RETURN_RESULT: {
      let player = state.mangHinh.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.id) {
        case "keo":
          // eslint-disable-next-line no-lone-blocks
          {
            if (computer.id === "keo") {
              state.ketQua = "Hòa rồi";
            } else if (computer.id === "bua") {
              state.ketQua = "Thua rồi";
            } else {
              state.soBanThang += 1;
              state.ketQua = "you saved the world,i love you 3000";
            }
          }
          break;
        case "bua":
          // eslint-disable-next-line no-lone-blocks
          {
            if (computer.id === "bua") {
              state.ketQua = "Hòa rồi";
            } else if (computer.id === "bao") {
              state.ketQua = "Thua rồi";
            } else {
              state.soBanThang += 1;
              state.ketQua = "you saved the world,i love you 3000";
            }
          }
          break;
        case "bao":
          // eslint-disable-next-line no-lone-blocks
          {
            if (computer.id === "bao") {
              state.ketQua = "Hòa rồi";
            } else if (computer.id === "keo") {
              state.ketQua = "Thua rồi";
            } else {
              state.soBanThang += 1;
              state.ketQua = "you saved the world,i love you 3000";
            }
          }
          break;
        default:
          state.ketQua = "you saved the world,i love you 3000";
      }
      state.soBanChoi += 1;
      return { ...state };
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return { ...state };
  }
};
export default OanTuXiReducer;

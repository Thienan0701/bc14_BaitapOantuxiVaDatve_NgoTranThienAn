const initialState = {
  mangHinh: [
    { id: "keo", hinhAnh: "./img/gameoantuxi/keo.png", datCuoc: false },
    { id: "bua", hinhAnh: "./img/gameoantuxi/bua.png", datCuoc: false },
    { id: "bao", hinhAnh: "./img/gameoantuxi/bao.png", datCuoc: true },
  ],
  ketQua: "you saved the world,i love you 3000",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { id: "bao", hinhAnh: "./img/gameoantuxi/keo.png", datCuoc: false },
};

const OanTuXiReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
export default OanTuXiReducer;

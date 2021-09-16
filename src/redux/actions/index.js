import * as actType from "./../constants";
const actGetDatCuoc = (ma) => {
  return {
    type: actType.GET_CUOC,
    payload: ma,
  };
};

const actClickPlay = () => {
  return {
    type: actType.GET_PLAY_RANDOM,
    payload: null,
  };
};
const actReturnResult = () => {
  return {
    type: actType.RETURN_RESULT,
    payload: null,
  };
};
const actGetGheDaDat = (ghe) => {
  return {
    type: actType.GET_GHE_DAT,
    payload: ghe,
  };
};
const actHuyGhe = (soGhe) => {
  return {
    type: actType.HUY_GHE,
    payload: soGhe,
  };
};
export {
  actGetDatCuoc,
  actClickPlay,
  actReturnResult,
  actGetGheDaDat,
  actHuyGhe,
};

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
export { actGetDatCuoc, actClickPlay, actReturnResult };

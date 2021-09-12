import React, { Component } from "react";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import "./OanTuXi.css";
import Player from "./Player";
import { connect } from "react-redux";
import { actClickPlay } from "../../redux/actions";
import * as actType from "./../../redux/constants";
class OanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-1">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQuaTroChoi />
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.GetPlaygame();
              }}
            >
              Play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    GetPlaygame: () => {
      let count = 0;
      //setInterval de tu dong dispatch len store nhieu lan
      let randomComputer = setInterval(() => {
        dispatch(actClickPlay(null));
        count++;
        if (count >= 30) {
          clearInterval(randomComputer);
          dispatch({
            type: actType.RETURN_RESULT,
          });
        }
      }, 100);
    },
    /**Cach viet khac:
     *
     */
    // GetPlaygame: () =>{
    //   dispatch({
    //     action: 'Get_play',
    //     payload: null,
    //   });
    // }
  };
};
export default connect(null, mapDispatchToProps)(OanTuXi);

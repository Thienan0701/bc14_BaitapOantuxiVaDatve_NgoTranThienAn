import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetDatCuoc } from "./../../redux/actions";
class Player extends Component {
  render() {
    const { mangHinh } = this.props;
    return (
      <div>
        <div className="playerThink">
          <img
            className="mt-1"
            style={{ width: 100, heigth: 100 }}
            src={mangHinh.find((item) => item.datCuoc === true).hinhAnh}
            alt="bua"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, heigth: 150 }}
          src="./img/gameoantuxi/player.png"
          alt="png"
        />
        <div className="row">
          {mangHinh.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid  green" };
            }
            return (
              <div className="col-sm-4" key={index}>
                <button
                  style={border}
                  className="btnItem"
                  onClick={() => {
                    this.props.GetDatCuoc(item.id);
                  }}
                >
                  <img
                    style={{ width: 40, heigth: 40 }}
                    src={item.hinhAnh}
                    alt="bua"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangHinh: state.OanTuXiReducer.mangHinh,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetDatCuoc: (ma) => {
      dispatch(actGetDatCuoc(ma));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);

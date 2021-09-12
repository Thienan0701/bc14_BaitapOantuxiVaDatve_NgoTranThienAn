import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    const { mangHinh } = this.props;
    console.log(mangHinh);
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
                    console.log(item);
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
export default connect(mapStateToProps, null)(Player);

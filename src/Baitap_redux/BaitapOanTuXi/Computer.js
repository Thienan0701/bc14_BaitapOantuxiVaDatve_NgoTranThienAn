import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    const { computer } = this.props;
    return (
      <div>
        <div className="playerThink">
          <img
            className="mt-1"
            style={{ width: 100, heigth: 100 }}
            src={computer.hinhAnh}
            alt="bua"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, heigth: 150 }}
          src="./img/gameoantuxi/playerComputer.png"
          alt="./img/gameoantuxi/playerComputer.png"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.OanTuXiReducer.computer,
  };
};
export default connect(mapStateToProps, null)(Computer);

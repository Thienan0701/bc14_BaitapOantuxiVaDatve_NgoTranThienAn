import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import { connect } from "react-redux";
import { actGetGheDaDat } from "./../../redux/actions";
class HangGhe extends Component {
  renderGhe = () => {
    let { danhSachGheDangDat } = this.props;
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDadat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDadat = "gheDuocChon";
        disable = true;
      }
      let cssGheDangDat = "";
      let indexGheDangDat = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          key={index}
          className={`ghe ${cssGheDadat} ${cssGheDangDat}`}
          disabled={disable}
          onClick={() => {
            this.props.GetGheDangDat(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button disabled="true" className="rowNumber" key={index}>
          {hang.soGhe}
        </button>
      );
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        className="text-warning text-left ml-5 mt-2"
        style={{ fontSize: "30" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    GetGheDangDat: (ghe) => {
      dispatch(actGetGheDaDat(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);

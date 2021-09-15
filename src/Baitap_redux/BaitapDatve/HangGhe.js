import React, { Component } from "react";
import "./BaiTapBookingTicket.css";

export default class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDadat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDadat = "gheDuocChon";
        disable = true;
      }
      return (
        <button key={index} className={`ghe ${cssGheDadat}`} disabled={disable}>
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

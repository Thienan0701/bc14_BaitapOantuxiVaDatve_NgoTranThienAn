import React, { Component } from "react";
import { connect } from "react-redux";
import { actHuyGhe } from "./../../redux/actions";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 text-light">
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: "0px" }}></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table className="table " border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "25" }}>
                <th>Số ghế:</th>
                <th>Giá:</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((ghe, index) => {
                return (
                  <tr
                    className="text-light"
                    style={{ fontSize: "25" }}
                    key={index}
                  >
                    <td>{ghe.soGhe}</td>
                    <td>{ghe.gia}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(actHuyGhe(ghe.soGhe));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-light" style={{ fontSize: "30" }}>
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce((tongtien, ghe) => {
                    return (tongtien += ghe.gia);
                  }, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps, null)(ThongTinDatGhe);

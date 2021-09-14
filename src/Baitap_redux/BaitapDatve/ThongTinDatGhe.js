import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
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
                <th>Số ghế:</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    );
  }
}

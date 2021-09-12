import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    const { ketQua, soBanChoi, soBanThang } = this.props;
    return (
      <div>
        <div className="display-4 text-warning">{ketQua}</div>
        <div className="display-4 text-success">
          So ban thang:
          <span className="display-4 text-warning">{soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          So ban choi:
          <span className="display-4 text-warning">{soBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.OanTuXiReducer.ketQua,
    soBanThang: state.OanTuXiReducer.soBanThang,
    soBanChoi: state.OanTuXiReducer.soBanChoi,
  };
};
export default connect(mapStateToProps, null)(KetQuaTroChoi);

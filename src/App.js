import "./App.css";

import React, { Component } from "react";
import OanTuXi from "./Baitap_redux/BaitapOanTuXi";
import Datve from "./Baitap_redux/BaitapDatve";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <OanTuXi /> */}
        <Datve />
      </div>
    );
  }
}

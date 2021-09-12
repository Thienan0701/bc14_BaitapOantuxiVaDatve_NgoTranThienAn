import React, { Component } from "react";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import "./OanTuXi.css";
import Player from "./Player";
export default class OanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-1">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQuaTroChoi />
            <button>Play game</button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

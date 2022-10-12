import React from "react";
import "./Tokenomics.css";
import { Chart } from "react-google-charts";

function Tokenomics() {
  return (
    <div className="tokenomics_section" id="tokenomics">
      <h1>Tokenomics - 0% Tax!</h1>
      <div className="row">
        <div className="col">
          <h1>Presale</h1>
          <h2 className="percentage">95%</h2>
        </div>
        <div className="col">
          <h1>Team</h1>
          <h2 className="percentage">2%</h2>
        </div>
        <div className="col">
          <h1>Marketing</h1>
          <h2 className="percentage">2%</h2>
        </div>
        <div className="col">
          <h1>Game (P2E)</h1>
          <h2 className="percentage">1%</h2>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
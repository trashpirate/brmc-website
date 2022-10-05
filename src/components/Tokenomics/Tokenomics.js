import React from "react";
import "./Tokenomics.css";
import { Chart } from "react-google-charts";

const data = [
  ["Utility", "Tokens"],
  ["Liquidity", 570000000],
  ["Presale", 380000000],
  ["Development", 20000000],
  ["Marketing/Listings", 20000000],
  ["Game (P2E)", 10000000],
];

const options = {
  width: 600,
  height: 500,
  title: "",
  // colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"],
  colors: ["#73f7dd", "#2cc4cb", "#1972a4", "#2e3a87", "#0F117D"],
  backgroundColor: { fill: "transparent" },
  legend: {
    position: "right",
    textStyle: { color: "white", fontSize: 16 },
    alignment: "center",
  },
  pieSliceTextStyle: { color: "white", fontName: "Roboto", fontSize: 16 },
  tooltip: { text: "percentage", ignoreBounds: true, isHtml: false },
  // chartArea: {left: 0, height: '75%', width: '75%'},
};

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

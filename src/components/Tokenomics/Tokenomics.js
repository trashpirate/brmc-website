import React from "react";
import "./Tokenomics.css";
import { Chart } from "react-google-charts";

const data = [
  ["Utility", "Tokens"],
  ["IDO", 250000000],
  ["Liquidity", 147000000],
  ["Launchpad Fee", 5000000],
  ["Team", 50000000],
  ["Marketing", 50000000],
  ["Staking", 131000000],
  ["Airdrop/Events", 30000000],
  ["Game (P2E)", 262000000],
  ["CEX", 75000000],
];

const options = {
  width: 600,
  height: 500,
  title: "",
  // colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"],
  colors: ["#73f7dd", "#2cc4cb", "#1972a4", "#2e3a87", "#0F117D"],
  backgroundColor: { fill: "transparent" },
  legend: { position: "right", textStyle: { color: "white", fontSize: 16 }, alignment: 'center' },
  pieSliceTextStyle: { color: "white", fontName: "Roboto", fontSize: 16 },
  tooltip: { text: "percentage", ignoreBounds: true, isHtml: false },
  // chartArea: {left: 0, height: '75%', width: '75%'},
};

function Tokenomics() {
  return (
    <div className="tokenomics_section" id="tokenomics">
      <h1>Tokenomics</h1>
      <div className="tokenomics_container">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default Tokenomics;

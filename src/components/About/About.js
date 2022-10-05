import React from "react";
import "./About.css";
import PanelItem from "./PanelItem";

function About() {
  return (
    <section className="about" id="about">
      <div className="about_container">
        <h1>What is BoredRatMaze?</h1>
        <p className="about_text">
          BoredRatMaze is a P2E arcade game. Outrun the angry cats, defeat your
          opponents and collect as many tokens as you can, running through an
          endless maze as fast as possible.
        </p>
      </div>
      <div className="panels__container">
        <div className="panels__wrapper">
          <ul className="panels__items">
            <PanelItem
              text="Earn tokens simply by playing the game"
              number="1"
            />
            <PanelItem text="Play with your friends in PvP mode" number="2" />
            <PanelItem
              text="Spend your tokens on NFTs, stack or swap on DEX"
              number="3"
            />
          </ul>
          <ul className="panels__items">
            <PanelItem
              text="Equip NFTs to increase your chances at winning"
              number="4"
            />
            <PanelItem text="Collect unique NFTs" number="5" />
            <PanelItem text="Trade NFTs on a NFT marketplace" number="6" />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

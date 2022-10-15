import React from "react";
import "./About.css";
import PanelItem from "./PanelItem";
import CountdownTimer from "../countownTimer/CountdownTimer";

const presaleDate = new Date("October 16, 2022 19:00:00");

function About() {
  return (
    <section className="about" id="about">
      <div className="countdown_container">
        <h1>Presale</h1>
        <CountdownTimer targetDate={presaleDate} />
      </div>
      <div className="about_container">
        <h1>What is Bored Rat Maze Club?</h1>
        <p className="about_text">
          Bored Rat Maze Club is a P2E arcade game. Outrun the angry cats,
          defeat your opponents and collect as many tokens as you can, running
          through a unique maze as fast as possible.
        </p>
      </div>
      <div className="panels__container">
        <div className="panels__items">
          <PanelItem text="Earn tokens simply by playing the game" number="1" />
          <PanelItem text="Play with your friends in PvP mode" number="2" />
          <PanelItem text="Spend your tokens on cool NFTs" number="3" />
          <PanelItem
            text="Use unique NFTs to increase your chances of winning"
            number="4"
          />
          <PanelItem text="Collect unique NFTs" number="5" />
          <PanelItem text="Trade NFTs on a NFT marketplace" number="6" />
        </div>
      </div>
    </section>
  );
}

export default About;

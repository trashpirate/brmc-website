import React from "react";
import "../../App.css";
import { Button } from "../__helpers/Button";
import "./HeroSection.css";
import "../__helpers/GlobalStyles.css";

function HeroSection() {
  return (
    <section className="hero-container" id="hero">
      <video width="100%" src="/videos/ratTunnel.mov" autoPlay loop muted />
      <div className="row">
        <div className="column">
          <img
            className="hero-img"
            alt="boredRatsLogo"
            src="/images/boredRat_250px.png"
          />
        </div>
        <div className="column">
          <div className="hero-btns">
            <h1>
              Welcome to the <br /> Bored Rat Maze Club
            </h1>
            <Button
              to="https://bscscan.com/"
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              SMART CONTRACT
            </Button>
            <div className="space" />
            <Button
              to="https://bscscan.com/"
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={console.log("hey")}
            >
              PancakeSwap
            </Button>
            <Button
              to="https://bscscan.com/"
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={console.log("hey")}
            >
              Chart
            </Button>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

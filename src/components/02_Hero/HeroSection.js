import React from "react";
import "../../App.css";
import { Button } from "../__helpers/Button";
import "./HeroSection.css";
import "../__helpers/GlobalStyles.css";
import { PopUp } from "../__helpers/PopUp";

function HeroSection() {
  return (
    <section className="hero-container" id="hero">
      <video width="100%" src="/videos/ratTunnel.mov" autoPlay loop muted />
      <div className="hero-row">
        <div className="hero-col">
          <img
            className="hero-img"
            alt="boredRatsLogo"
            src="/images/boredRat_250px.png"
          />
          <br />
          <a
            type="button"
            href="https://www.pinksale.finance/launchpad/0xdE15F292DE42647DEDbcC121Ad6831C13a337F36?chain=BSC"
            className="presale-btn"
          >
            Presale
          </a>
        </div>
        <div className="hero-col">
          <div className="hero-btns">
            <h1>
              Welcome to the <br /> Bored Rat Maze Club
            </h1>
            <Button
              to="https://bscscan.com/address/0x9Af8c94a25Cc120F24703569F64f7c2c1dA47568"
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              SMART CONTRACT
            </Button>
            <div className="space" />
            <Button
              to="https://pancakeswap.finance/swap?inputCurrency=0x9Af8c94a25Cc120F24703569F64f7c2c1dA47568"
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={console.log("hey")}
            >
              PancakeSwap
            </Button>
            <Button
              to="https://poocoin.app/tokens/0x9af8c94a25cc120f24703569f64f7c2c1da47568"
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

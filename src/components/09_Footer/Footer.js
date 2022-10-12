import React from "react";
import "./Footer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <div className="footer-container">
      <h1 className="footer-title">PARTNERS</h1>
      <ul className="partner_logos">
        <div className="partner">
          <a href="https://www.pinksale.finance/">
            <img
              className="partner_logo_img"
              alt="pinksale"
              src="/images/pinksale.png"
            />
          </a>
          <p className="partner_name">PinkSale</p>
        </div>
        <div className="partner">
          <a href="https://www.contractchecker.app/">
            <img
              className="partner_logo_img"
              alt="contractchecker"
              src="/images/contractchecker.png"
            />
          </a>
          <p className="partner_name">ContractChecker</p>
        </div>
        <div className="partner">
          <a href="https://t.me/Caesars_Calls">
            <img
              className="partner_logo_img"
              alt="contractchecker"
              src="/images/caesarcalls.png"
            />
          </a>
          <p className="partner_name">CaesarsCalls</p>
        </div>
        <div className="partner">
          <a href="https://www.youtube.com/channel/UCryq419XAdNubEZyjwHWgCQ">
            <img
              className="partner_logo_img"
              alt="contractchecker"
              src="/images/no_crypto.png"
            />
          </a>
          <p className="partner_name">no</p>
        </div>
      </ul>
      <h1 className="footer-title">FOLLOW US</h1>
      <div class="social-icons">
        <a
          class="social-icon-link telegram"
          href="https://t.me/boredratmazeclub"
          aria-label="Telegram"
        >
          <i class="fab fa-telegram" />
        </a>
        <a
          class="social-icon-link twitter"
          href="https://twitter.com/BoredRatMC"
          aria-label="Twitter"
        >
          <i class="fab fa-twitter" />
        </a>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <AnchorLink href="#hero" className="footer-logo">
              <img
                className="logo-img"
                alt="boredRatsLogo"
                src="/images/ratLogo.png"
              />
              <h1 className="footer-logo-title">BoredRatMC</h1>
            </AnchorLink>
          </div>
          <small class="website-rights">BoredRatMazeClub © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;

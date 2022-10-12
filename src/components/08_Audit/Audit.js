import React from "react";
import "./Audit.css";

function Audit() {
  return (
    <section className="audit" id="audit">
      <div className="audit_container">
        <span className="emoji">&#128274;</span>
        <h1 id="title">SAFU, KYC, and AUDIT</h1>
        <h2 id="subtitle">Security & Safety Certification</h2>
        <p className="audit_text">
          We care about the safety of our community! Therefore, we took maximum
          security measures and partnered with the PinkSale SAFU Development
          Team which includes a rigorous KYC verification process and an audited
          contract for the $CHEESE token.
        </p>
      </div>
      <div className="audit-buttons">
        <a
          href="https://docs.pinksale.finance/important/safu-contract"
          className="safu-button"
        >
          SAFU
        </a>
        <a
          href="https://docs.pinksale.finance/important/pinksale-kyc"
          className="kyc-button"
        >
          KYC
        </a>
        <a
          href="https://irp.cdn-website.com/1b45ecb9/files/uploaded/BoredRatMazeClub_AuditReport_InterFi.pdf"
          className="audit-button"
        >
          AUDIT
        </a>
      </div>
    </section>
  );
}

export default Audit;

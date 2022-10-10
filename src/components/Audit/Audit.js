import React from "react";
import "./Audit.css";

function Audit() {
  return (
    <section className="audit" id="audit">
      <div className="audit_container">
        <h1 id="title">SAFU, KYC, and AUDIT</h1>
        <h2 id="subtitle">Security & Safety Certification</h2>
        <p className="audit_text">
          We care about the safty of our community! Therefore, we took maximum
          security measures and partnered with the PinkSale SAFU Development
          Team which includes a rigorous KYC verification process and an audited
          contract for the token.
        </p>
      </div>
      <div className="audit-buttons">
        <a href="" className="audit-button">
          SAFU
        </a>
        <a href="" className="audit-button">
          KYC
        </a>
        <a href="" className="audit-button">
          AUDIT
        </a>
      </div>
    </section>
  );
}

export default Audit;

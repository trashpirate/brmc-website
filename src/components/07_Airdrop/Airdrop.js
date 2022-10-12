import React from "react";
import "./Airdrop.css";

function Airdrop() {
  return (
    <section className="airdrop" id="airdrop">
      <div className="airdrop_container">
        <h1 id="title">
          <span className="emoji" role="img" aria-label="emoji">
            &#127881;
          </span>{" "}
          NFT AIRDROP{" "}
          <span className="emoji" role="img" aria-label="emoji">
            &#127881;
          </span>
        </h1>
        <p className="airdrop_text">
          BoredRat NFTs will be airdropped to the top 1000 $CHEESE holders. An
          announcement about the airdrop date and details will be made once the
          BSC $CHEESE holder count reaches 1000 holders.
        </p>
      </div>
    </section>
  );
}

export default Airdrop;

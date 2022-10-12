import React from "react";
import "./PanelItem.css";

function PanelItem(props) {
  return (
    <>
      <div className="panels__item">
        <div className="panels_number_field">
          <p>{props.number}</p>
        </div>
        <div className="panels__item__card">
          <p className="panels__item__text">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default PanelItem;

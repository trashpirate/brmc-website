import React from "react";
import "./PanelItem.css";

function PanelItem(props) {
  return (
    <>
      <li className="panels__item">
        <div className="panels_number_field">
          <h1>{props.number}</h1>
        </div>
        <div className="panels__item__card">
          <h5 className="panels__item__text">{props.text}</h5>
        </div>
      </li>
    </>
  );
}

export default PanelItem;

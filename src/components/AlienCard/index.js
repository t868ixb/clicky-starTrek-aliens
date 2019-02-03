import React from "react";
import "./style.css";

function AlienCard(props) {
  return (
    <div className="card" onClick={props.imageClick}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Species:</strong> {props.name}
          </li>
          <li>
            <strong>First Appearance:</strong> <br /> {props.firstAppearance}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AlienCard;

import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Website:</strong> {props.website}
          </li>
          <li>
            <strong>Github:</strong> {props.github}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;

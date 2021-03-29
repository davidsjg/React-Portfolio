import React from "react";
import "./style.css";


function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} 
        // src={require(`../../projects.json/${props.name}.png`)}
        src={`${process.env.PUBLIC_URL}/assets/images/${props.name}.png`} 
        className="project-bg"
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Website:</strong> 
            <div><a href={props.website} target="blank">{props.website}</a></div>
          </li>
          <li>
            <strong>Github:</strong> 
            <div><a href={props.github} target="blank">{props.github}</a></div>
          </li>
        </ul>
      </div>
    </div>
  );
}




export default FriendCard;



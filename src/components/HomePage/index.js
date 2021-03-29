import React from "react";
import "./style.css";
import 'materialize-css';
import {Link} from 'react-router-dom'
import { Button, Card, Row, Col } from 'react-materialize';


function HomePage(props) {
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
            <strong></strong> 
            <Link to="/contact">{props.name}</Link>
            {/* <div><a href={props.website} target="blank">Contact Page</a></div> */}
          </li>
        </ul>
      </div>
    </div>
  );
}




export default HomePage;



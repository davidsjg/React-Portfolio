import React, { useState } from "react";
import FriendCard from "../../components/FriendCard"
import projects from "../../projects.json";
import {Container, Card} from 'semantic-ui-react'




function Portfolio() {

  return (
  <>
    <Container>
    <Card.Group itemsPerRow= {3}>
    {projects.map(projects => (
          <FriendCard
            id={projects.id}
            key={projects.id}
            name={projects.name}
            website={projects.website}
            github={projects.github}
            image={projects.image}
          />
          ))}
    </Card.Group>
    </Container>
  </>  
  )
}

export default Portfolio;
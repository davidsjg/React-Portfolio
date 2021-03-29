import React, { useState } from "react";
import FriendCard from "../../components/FriendCard"
import HomePage from "../../components/HomePage"
import homePage from "../../homePage.json";
import {Container, Card} from 'semantic-ui-react'




function Portfolio() {

  return (
  <>
    <Container>
    <Card.Group itemsPerRow= {3} stackable={false}>
    {homePage.map(homePage => (
          <FriendCard
            id={homePage.id}
            key={homePage.id}
            name={homePage.name}
            website={homePage.website}
            github={homePage.github}
            image={homePage.name}
          />,
          <HomePage
            id={homePage.id}
            key={homePage.id}
            name={homePage.name}
            website={homePage.website}
            github={homePage.github}
            image={homePage.name}
          />
          ))}
    </Card.Group>
    </Container>
  </>  
  )
}

export default Portfolio;
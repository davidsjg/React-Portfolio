import React, { useState } from "react";
import FriendCard from "../../components/FriendCard"
import projects from "../../projects.json";



function Portfolio() {

  return (
  <>
    <div className="mt-4">
    {projects.map(projects => (
          <FriendCard
            id={projects.id}
            key={projects.id}
            name={projects.name}
            image={projects.image}
          />
          ))}
    </div>
  </>  
  )
}

export default Portfolio;
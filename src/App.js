import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard"
import projects from "./projects.json";

console.log(projects.id)

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };
  

  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
          {this.state.projects.map(projects => (
          <FriendCard
            id={projects.id}
            key={projects.id}
            name={projects.name}
            image={projects.image}
          />
          ))}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
}


export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";
import DeveloperContext from "./utils/DeveloperContext";

function App() {
  document.title = "Joey Davidson Portfolio";
  return (
    <Router>
      <div>
      <DeveloperContext.Provider value={developerState}>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </DeveloperContext.Provider>
      </div>
    </Router>
  );
}

export default App;

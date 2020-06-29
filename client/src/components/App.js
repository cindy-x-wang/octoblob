import React, { Component } from "react";
import { Router } from "@reach/router";

import "./App.css";
import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import Octoblob from "./pages/Octoblob.js";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import NavBar from "./modules/NavBar.js"
import Coursework from "./pages/Coursework.js";
import Projects from "./pages/Projects.js";
import Resume from "./pages/Resume.js";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App-container">
        <NavBar/>
        <Router>
          <Octoblob
            path="/"
          />
          <Coursework
            path="/coursework"
          />
          <Projects
            path="/projects"
          />
          <Resume
            path="/resume"
          />
          <Skeleton
            path="/Skeleton"
          />
          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default App;

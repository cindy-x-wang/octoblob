import React, { Component } from "react";

import "../../utilities.css";
import "./Projects.css";

import Footer from "../modules/Footer.js";
import sample_project from "./project-reels/sample_project.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return(
    <>
    <div className="head-container-projects">
        <div className="projects-page-container">
            <div className="projects-column">
                <div className="background-block">
                    <img src={sample_project} width="100%"/>
                </div>
                <div className="background-block">
                    this is project 4 methinks
                </div>

            </div>
            <div className="projects-column">
                <div className="background-block">
                    this is project 2 methinks
                </div>
                
            </div>
            <div className="projects-column">
                <div className="background-block">
                    this is project 3 methinks
                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
  </>
    );
  }
}

export default Projects;

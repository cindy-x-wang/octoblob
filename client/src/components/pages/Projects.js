import React, { Component } from "react";
import { Link } from "@reach/router";


import "../../utilities.css";
import "./Projects.css";

import Footer from "../modules/Footer.js";
import sample_project from "./project-reels/sample_project.png";
import artcubator from "./project-reels/theartcubator_image.png";
import habitaquarium from "./project-reels/habitaquarium_reel.gif";
import octoblob1 from "./project-reels/octoblob1.png";
import octoblob2 from "./project-reels/octoblob2.png";
import octoblob3 from "./project-reels/octoblob3.png";

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

  // full screen screenshots are 1440x720 pixels

  render() {
    return(
    <>
    <div className="head-container-projects">
        <div className="projects-page-container">
            <div className="projects-grid">
                <div className="background-block" style={{backgroundColor: 'magenta'}}>
                  <Link to="./artcubator">
                    <img src={artcubator} width="100%"/>
                  </Link>
                </div>
                <div className="background-block" style={{backgroundColor: 'lightBlue'}}>
                    <img src={habitaquarium} width="100%"/>
                </div>
                <div className="background-block" style={{backgroundColor: 'pink'}}>
                  <div className="slidehack">
                    <img src={octoblob1} width="100%"/>
                  </div>

                  <div className="slideshow">
                    <div className="slidehack fade1">
                      <img src={octoblob2} width="100%"/>
                    </div>
                    <div className="slidehack fade2">
                      <img src={octoblob3} width="100%"/>
                    </div>
                  </div>
                </div>
                
            
                <div className="background-block">
                    there is nothing here but there will be (i hope)
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

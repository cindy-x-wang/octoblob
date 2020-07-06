import React, { Component } from "react";

import "../../utilities.css";
import "./About.css";

import {AnimatedText} from "../modules/AnimatedText/AnimatedText";
import Footer from "../modules/Footer.js";

class About extends Component {
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
        <div className="head-container-about">
            
            <Footer/>
        </div>
        <div className="head-container-trolol-1">
                <AnimatedText
                    textColor="#8a92b1"
                    overlayColor="#fdc52c"
                    pointer="default"
                >
                    don't click this
                </AnimatedText>
        </div>
    </>
    );
  }
}

export default About;

import React, { Component } from "react";

import "../../utilities.css";
import "./About.css";

import {AnimatedText} from "../modules/AnimatedText/AnimatedText";
import Footer from "../modules/Footer.js";
import catpic from "./art/cat_laptop_cropped.jpg";

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
            <div className="about-section">
                <div className="catpic-container">
                    <img src={catpic} width="100%"/>
                </div>
                <div className="about-text-bold">
                    I actually don't code
                </div>
                <div className="about-text">
                    ...it's all her.
                </div>
            </div>

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

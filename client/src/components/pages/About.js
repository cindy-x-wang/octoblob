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
                <p className="about-text">
                    ...it's all her.
                </p>
                <p className="about-text">
                I've always introduced myself as a computer science student, exploring innovative tech (and breaking it). 
                But that sounds so boring (I promise it's not, but it still sounds lame as my one personality trait).
                </p>
                <p className="about-text">
                I'd rather my one trait be my boba obsession, but I get roasted a lot for that and I have to prove to my friends that I in fact do things other than stare at my computer and guzzle sugary tea.
                </p>
                <p className="about-text">
                  In pre-COVID college days, I'd spend a lot of my time cheerleading and dancing with ADT (Asian Dance Team); however, cheering/dancing alone is very sad!
                  Working from home all summer has forced me to find other things that I can actually enjoy alone, and I'm happy to add those things [knitting, webdev, digital art] to my list of personality traits!
                </p>
                <p className="about-text">
                  Other than that, I play the violin, am a fake kpop stan, and am trying to learn the guitar on my own. 
                  I love my cat more than anything else in the world. 
                  I'm a feminist. I'm a NorCal native #westcoastbestcoast.
                  There's no way to know if I'll be an optimist or nihilist the next time you see me.
                </p>
                <p className="about-text">
                  Oh did I mention I have a cat?
                </p>
            </div>

        </div>
        <div className="head-container-trolol-1">
                <AnimatedText
                    textColor="#8a92b1"
                    overlayColor="#fdc52c"
                    pointer="default"
                >
                    nothing is here
                </AnimatedText>
        </div>
    </>
    );
  }
}

export default About;

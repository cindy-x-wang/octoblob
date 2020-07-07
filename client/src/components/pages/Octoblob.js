import React, { Component } from "react";

import "../../utilities.css";
import "./Octoblob.css";

import Sitting_Avatar from "./art/Sitting_Avatar.png";
import Mountain_Border from "./art/mountain_border.png";
import Blob_Avatar from "./art/pink_blob_avatar.png";

import {AnimatedText} from "../modules/AnimatedText/AnimatedText";
import Icons from "../modules/Icons";

class Octoblob extends Component {
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
    
    <div className="head-container-intro">
      <div className="blob-spacer"/>
      <div className="blob-container">
        {/* <div className="intro-container">
          <div className="intro-text">
              Hi, I'm Cindy! 
          </div>
            <div className="intro-text">
              Hi, I'm Cindy!
            </div>
          
            <div className="intro-text-small">
              I’m currently studying computer science-y things at MIT, 
              have one (1) angry cat, and love boba way more than I should.
            </div>
        </div> */}
        
        <Icons/>
        
      </div>
    </div>



    );
  }
}

export default Octoblob;

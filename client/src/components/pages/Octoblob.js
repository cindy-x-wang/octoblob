import React, { Component } from "react";

import "../../utilities.css";
import "./Octoblob.css";

import Sitting_Avatar from "./art/Sitting_Avatar.png";
import Mountain_Border from "./art/mountain_border.png";
import Blob_Avatar from "./art/pink_blob_avatar.png";

class Octoblob extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return(
    <>
    <div className="head-container">
      <div className="blob-container">
        <img src={Blob_Avatar} height="800px" >
        </img>
      </div>
    </div>
    <div className="intro-container">
      <div className="intro-text">
          Hi, I'm Cindy! 
      </div>
      <div className="intro-text-small">
        I’m currently studying computer science at MIT, 
        have one (1) angry cat, and love boba way more than I should.
      </div>
    </div>



    {/* <div className="mountain-border">
        <img src={Mountain_Border}  width="100%">
        </img>
    </div> */}
    
    <div className="head-container">
      <> u r idiot2</>
  </div>
  </>
    );
  }
}

export default Octoblob;

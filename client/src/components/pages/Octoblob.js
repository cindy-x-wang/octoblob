import React, { Component } from "react";

import "../../utilities.css";
import "./Octoblob.css";

import Sitting_Avatar from "./art/Sitting_Avatar.png";

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
      <div className="intro-container">
        <> Hi, I'm Cindy! </>
      </div>
      <div className="sitting-avatar-container">
        <img src={Sitting_Avatar} width="100%" >
        </img>
      </div>
    </div>
    <div className="head-container">
      <> u r idiot2</>
  </div>
  </>
    );
  }
}

export default Octoblob;

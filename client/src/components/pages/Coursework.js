import React, { Component } from "react";

import "../../utilities.css";
import "./Coursework.css";

import Desk_Avatar from "./art/Desk_Avatar.png";

import SemesterCard from "../modules/SemesterCard.js";
import Footer from "../modules/Footer.js";
import {allSemesters, allCourses} from "./CourseworkContent";


class Coursework extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      showingCSOnly: false,
      showingDescriptions: false,
      showingCommentary: false,
      allCourses,
      allSemesters,
    };
  }

  toggleShowingCSOnly = () => {
    this.setState((prevState) => ({ showingCSOnly: !prevState.showingCSOnly }));
  };

  toggleShowingDescriptions = () => {
      console.log('meow')
    this.setState((prevState) => ({ showingDescriptions: !prevState.showingDescriptions }));
  };

  toggleShowingCommentary = () => {
    this.setState((prevState) => ({ showingCommentary: !prevState.showingCommentary }));
  };

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return(
    <>
    <div className="head-container-classes">
      <div className="desk-container">
        <img src={Desk_Avatar} height="590px" >
        </img>
      </div>

      <div className="hell-text">
        this way to <del>hell</del> course list 
      </div>
      <a href="#courselist" className="link-icon-spacing">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
      </a>

      <div className="coursework-page-container-2">
        <div className="coursework-description-container-2">
          <div className="coursework-description-text-bold">
          Wow I study?!
          </div>
          <div className="coursework-description-text-2">
            I am a Course 6-3 (which means Computer Science) because I have fallen into the trap of <i>enjoying</i> programming.
          <br></br><br></br>
          Here I’ve listed all my coursework with varying levels of detail and commentary. Proceed at your own risk.
          </div>

        </div>

        <div className="coursework-description-text-bold" id="courselist">
            coursework
        </div>

        <div className="coursework-list-container-2">
          <div className="button-container">
            <button onClick={this.toggleShowingCSOnly}>
              cs-related only
            </button>
            
            <button onClick={this.toggleShowingDescriptions}>
              descriptions
            </button>
            <button onClick={this.toggleShowingCommentary}>
              unnecessary commentary
            </button>

          </div>
          <div >
            {this.state.allSemesters.map((s) => (
              <div>
                <SemesterCard sem={s} allCourses={this.state.allCourses} showingCSOnly={this.state.showingCSOnly} showingDescriptions={this.state.showingDescriptions} showingCommentary={this.state.showingCommentary} />
              </div>
              ))
            }
          </div>

        </div>
      </div>
    </div> 
    <Footer/>
  </>
    );
  }
}

export default Coursework;

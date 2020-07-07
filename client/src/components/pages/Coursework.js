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

      <div>
        this way to hell 
      </div>

      <div className="coursework-page-container-2">
        <div className="coursework-description-container-2">
          <div className="coursework-description-text-bold">
          Wow I study?!
          </div>
          <div className="coursework-description-text-2">
            Although I am currently a Course 6-2 (which means Electrical Engineering and Computer Science), I may soon become a lowly 6-3 (Computer Science) because I am falling into the trap of <i>enjoying</i> programming.
          <br></br><br></br>
          Here I’ve listed all my coursework with varying levels of detail and commentary. Proceed at your own risk.
          </div>

        </div>

        <div className="coursework-description-text-bold">
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

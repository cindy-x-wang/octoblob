import React, { Component } from "react";

import "../../utilities.css";
import "./Resume.css";

import ResumeSection from "../modules/ResumeSection";
import {AnimatedText} from "../modules/AnimatedText/AnimatedText";
import {allResumeSections, allResumeContent} from "./ResumeContent";

class Resume extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      showingCSOnly: false,
      showingDescriptions: false,
      showingCommentary: false,
      allResumeContent,
      allResumeSections,
    };
  }

  toggleShowingCSOnly = () => {
    this.setState((prevState) => ({ showingCSOnly: !prevState.showingCSOnly }));
  };

  toggleShowingDescriptions = () => {
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
    <div className="head-container-resume">

      <div className="resume-page-container">

        <div className="resume-page-title">
            resume
        </div>

        <div className="resume-list-container">
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
            {this.state.allResumeSections.map((s) => (
              <div>
                <ResumeSection sem={s} allResumeContent={this.state.allResumeContent} showingCSOnly={this.state.showingCSOnly} showingDescriptions={this.state.showingDescriptions} showingCommentary={this.state.showingCommentary} />
              </div>
              ))
            }
          </div>

        </div>
      </div>

    </div> 

    <div className="head-container-trolol">
      <div className="animated-text-container">
          <AnimatedText
            textColor="#cd122d"
            overlayColor="#fdc52c"
            pointer="default"
          >
          this should animate and it doesn't and i am angy
        </AnimatedText>

      </div>
    
    </div>
  </>
    );
  }
}

export default Resume;

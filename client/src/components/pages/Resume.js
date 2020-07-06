import React, { Component } from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import "../../utilities.css";
import "./Resume.css";

import ResumeSection from "../modules/ResumeSection";
import Footer from "../modules/Footer.js";
import {allResumeSections, allResumeContent} from "./ResumeContent";

class Resume extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      showingCSOnly: false,
      showingDescriptions: false,
      showingCommentary: false,
      importance: 1,
      allResumeContent,
      allResumeSections,
    };
  }

  onSliderChange = importance => {
    this.setState(
      {
        importance
      },
      () => {
        console.log(this.state.importance);
      }
    );
  };

  getSections = () => {
    const thisSection = this.state.allResumeSections.filter(sec => sec.importance <= this.state.importance);
    return thisSection;
  };

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return(
    <div className="head-container-resume">

      <div className="resume-page-container">

        <div className="resume-page-title">
            resume
        </div>

        <div className="resume-list-container">
          <div className="slider-container">
            <Slider
              min={0}
              max={4}
              marks={{
                0: (<b>time is money</b>),
                1: (<div>default</div>),
                2: (<div>more info</div>),
                3: (<div>you bored?</div>),
                4: (<div>too much</div>)
              }}
              value={this.state.importance}
              onChange={this.onSliderChange}
              />
            </div>
          
          <div >
            {this.getSections().map((s) => (
              <div>
                <ResumeSection sec={s} importance={this.state.importance} allResumeContent={this.state.allResumeContent}/>
              </div>
              ))
            }
          </div>

        </div>
      </div>
      <Footer/>

    </div>
    );
  }
}

export default Resume;

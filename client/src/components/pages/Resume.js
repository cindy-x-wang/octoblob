import React, { Component } from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from "@reach/router";

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
        <div className="resume-page-title-container">
          <div className="resume-page-title">
              resume
          </div>
          <a href="/resume.pdf" target="_blank">
            <div className="resume-icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>
            </div>
          </a>
        </div>

        <div className="resume-list-container">
          <div className="slider-container">
            <Slider
              min={0}
              max={4}
              marks={{
                0: (<div>time is money</div>),
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
            {this.getSections().map((s,i) => (
              <div key={i}>
                <ResumeSection sec={s} importance={this.state.importance} allResumeContent={this.state.allResumeContent} key={i}/>
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

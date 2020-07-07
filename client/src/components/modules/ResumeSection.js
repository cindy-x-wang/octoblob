import React, { Component } from "react";
import "../../utilities.css";
import "./ResumeSection.css";

import ResumeCard from "./ResumeCard.js";

/**
 * Renders a single section of resume.
 * @param {allResumeContent} resume content.
 * @param {allResumeSections} resume sections.
 * @param {importance} current importance from slider.
 *
 */
class ResumeSection extends Component {
    constructor(props) {
      super(props);
    }

    getSectionContent = () => {
        const thisSection = this.props.allResumeContent.filter(content => content.section == this.props.sec.sectionName).filter(content => content.importance <= this.props.importance);
        return thisSection;
      };
  
    render() {
      return (
        <div className="resume-section-border">
          <div className="resume-section-label">
              {this.props.sec.sectionName}
          </div>
          <div className="resume-text-container">
              {this.getSectionContent().map((c,i) => (
                <div className="resume-text" key={i}>
                  <ResumeCard importance={this.props.importance} event={c} key={i}/>
                </div>
              ))}
    
          </div>
        </div>
      );
    }
  }
  
  export default ResumeSection;  
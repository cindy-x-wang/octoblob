import React, { Component } from "react";
import "../../utilities.css";
import "./ResumeSection.css";

import ResumeCard from "./ResumeCard.js";

/**
 * Renders a single section of resume.
 *
 */
class ResumeSection extends Component {
    constructor(props) {
      super(props);
    }

    getSectionContent = imp => {
        const thisSection = this.props.allResumeContent.filter(content => content.importance <= imp);
        return thisSection;
      };
  
    render() {
      return (
        <div className="resume-section-border">
          <div className="resume-section-label">
              {this.props.sec.sectionName}
          </div>
          <div className="resume-text-container">
              {this.getSectionContent(this.props.sec.sectionName).map((c,i) => (
                <div className="resume-text">
                  <ResumeCard course={c} showingCSOnly={this.props.showingCSOnly} showingDescriptions={this.props.showingDescriptions} showingCommentary={this.props.showingCommentary} key={i}/>
                </div>
              ))}
    
          </div>
        </div>
      );
    }
  }
  
  export default ResumeSection;  
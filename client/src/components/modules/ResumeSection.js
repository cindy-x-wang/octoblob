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

    getSectionContent = sec => {
        const thisSection = this.props.allResumeContent.filter(content => content.section == sec);
        return thisSection;
      };

    getSemClasses = sem => {
        const thisSection = this.props.allResumeContent.filter(course => course.semester == sem);
        return thisSection;
      };
  
    render() {
      return (
        <div className="resume-section-border">
          <div className="resume-section-label">
              {this.props.sem.sectionName}
          </div>
          <div className="resume-text-container">
          {this.props.showingCSOnly ? 
              this.getSectionContent(this.props.sem.sectionName).filter(sec => sec.CS == true).map((c,i) => (
                  <div className="resume-text">
                    <ResumeCard course={c} showingCSOnly={this.props.showingCSOnly} showingDescriptions={this.props.showingDescriptions} showingCommentary={this.props.showingCommentary} key={i}/>
                  </div>
                  ))
          : 
              this.getSectionContent(this.props.sem.sectionName).map((c,i) => (
                    <div className="resume-text">
                      <ResumeCard course={c} showingCSOnly={this.props.showingCSOnly} showingDescriptions={this.props.showingDescriptions} showingCommentary={this.props.showingCommentary} key={i}/>
                    </div>
                    ))
            }
          </div>
        </div>
      );
    }
  }
  
  export default ResumeSection;  
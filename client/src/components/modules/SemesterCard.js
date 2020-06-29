import React, { Component } from "react";
import "../../utilities.css";
import "./SemesterCard.css";

import ClassCard from "./ClassCard.js";

/**
 * Renders a single semester of classes.
 *
 */
class SemesterCard extends Component {
    constructor(props) {
      super(props);
    }

    getSemClasses = sem => {
        const thisSem = this.props.allCourses.filter(course => course.semester == sem);
        return thisSem;
      };
  
    render() {
      return (
        <div className="semester-border">
          <div className="semester-label">
              {this.props.sem.semName}
          </div>
          <div className="courses-text-container">
          {this.props.showingCSOnly ? 
              this.getSemClasses(this.props.sem.semNum).filter(course => course.CS == true).map((c,i) => (
                  <div className="courses-text">
                    <ClassCard course={c} showingCSOnly={this.props.showingCSOnly} showingDescriptions={this.props.showingDescriptions} showingCommentary={this.props.showingCommentary} key={i}/>
                  </div>
                  ))
          : 
              this.getSemClasses(this.props.sem.semNum).map((c,i) => (
                    <div className="courses-text">
                      <ClassCard course={c} showingCSOnly={this.props.showingCSOnly} showingDescriptions={this.props.showingDescriptions} showingCommentary={this.props.showingCommentary} key={i}/>
                    </div>
                    ))
            }
          </div>
        </div>
      );
    }
  }
  
  export default SemesterCard;  
import React, { Component } from "react";
import "../../utilities.css";
import "./ClassCard.css";

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
        <>
        <div>
            {this.props.sem.semName}
        </div>
        <div>
        {this.props.showingCSOnly ? 
        this.getSemClasses(this.props.sem.semNum).filter(course => course.CS == true).map((c) => (
            <div>
              <ClassCard course={c} showingCSOnly={this.props.showingCSOnly} showingDescriptions={this.props.showingDescriptions} showingCommentary={this.props.showingCommentary} />
            </div>
            ))
        : 
            this.getSemClasses(this.props.sem.semNum).map((c) => (
                   <div>
                     <ClassCard course={c} showingCSOnly={this.props.showingCSOnly} showingDescriptions={this.props.showingDescriptions} showingCommentary={this.props.showingCommentary} />
                   </div>
                   ))
           }
        </div>
        </>
      );
    }
  }
  
  export default SemesterCard;  
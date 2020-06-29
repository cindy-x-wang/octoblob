import React, { Component } from "react";
import "../../utilities.css";
import "./ResumeCard.css";

/**
 * Renders a single card in resume with info.
 *
 * Proptypes
 * @param {MessageObject} message
 */
class ResumeCard extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <ul>
          <li className="resume-header-names">
            {this.props.course.number} - {this.props.course.name}
          </li>
          <ul>
            <li className={this.props.showingDescriptions ? "descriptions" : "hidden"}>
                {this.props.course.description}
            </li>

            <li className={this.props.showingCommentary ? "unnecessary-commentary" : "hidden"}>
                {this.props.course.commentary}
            </li>
            
          </ul>
          
         
          
        
        </ul>
      );
    }
  }
  
  export default ResumeCard;  
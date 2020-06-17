import React, { Component } from "react";
import "../../utilities.css";
import "./ClassCard.css";

/**
 * Renders a single card in coursework with course info.
 *
 * Proptypes
 * @param {MessageObject} message
 */
class ClassCard extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <ul>
          <li>
            {this.props.course.number} - {this.props.course.name}
          </li>
          <ul>
            <li className={this.props.showingDescriptions ? "" : "hidden"}>
                {this.props.course.description}
            </li>
            <ul>
                <li className={this.props.showingCommentary ? "" : "hidden"}>
                {this.props.course.commentary}
                </li>
            </ul>
          </ul>
          
         
          
        
        </ul>
      );
    }
  }
  
  export default ClassCard;  
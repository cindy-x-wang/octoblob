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

    getDescriptions = () => {
      const descriptions = this.props.event.description.filter(content => content.imp <= this.props.importance);
      return descriptions;
    };
  
    render() {
      return (
        <ul>
          <li className="resume-header-names">
            {this.props.event.date == "" ? (
              this.props.event.name
            ) :
            (this.props.event.name.concat(" | ", this.props.event.date)
            )}
          </li>
          <ul>
            {this.getDescriptions().map((c,i) => (
                <li className="descriptions" key={i}>
                  {c.text}
                </li>
              ))}
            
          </ul>
          
         
          
        
        </ul>
      );
    }
  }
  
  export default ResumeCard;  
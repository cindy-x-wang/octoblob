import React, { Component } from "react";
import "../../utilities.css";
import "./Footer.css";
import Icons from "./Icons";

/**
 * Renders footer for the bottom of pages.
 *
 */
class Footer extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="footer-container">
            <div className="footer-text">
                made with love (and React)
            </div>
            <Icons/>
        </div>
      );
    }
  }
  
  export default Footer;  
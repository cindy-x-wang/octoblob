import React, { Component } from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

/* const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      
      return {
        style: {
         //"font-weight": isCurrent ? 900 : "inherit",
         textShadow: isCurrent ? "0 0 3px white" : "none",
        }
      };
    }}
  />
); */


/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div className="NavBar-container">
      <div className="NavBar-sidebar">
          
          <div className="menu-item">
            SCHOOL THINGS
          </div>
          <div className="menu-item">
            two
          </div>

          <div className="NavBar-title">
              L
          </div>
          
          <div className="menu-item">
            PROJECTS
          </div>
          <div className="menu-item">
            ABOUT
          </div>
      </div>
        {/* <div className="NavBar-title-container">
          
        </div> */}
        {/* <div className="logout-button">
        {this.props.userId ? (
          null
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.props.handleLogin}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          )}

        </div> */}
        
      </div>
      </>
    );
  }
}

export default NavBar;
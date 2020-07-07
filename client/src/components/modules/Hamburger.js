import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Hamburger.css";
import { AnimatedText } from "./AnimatedText";

import MenuItem from "./MenuItem.js";
import MenuButton from "./MenuButton.js";
import Menu from "./Menu.js";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      
      return {
        style: {
         //"font-weight": isCurrent ? 900 : "inherit",
         textShadow: isCurrent ? "0 0 1px white" : "none",
         // display: isCurrent ? "none" : "",
        }
      };
    }}
  />
);


/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state={
      menuOpen:false,
    }
  }

  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }

  render() {
    const styles= 
        {
          container:{
            textDecoration: 'none',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: '99',
            opacity: 0.9,
            display:'flex',
            alignItems:'center',
            background: '#8A92B1',
            width: '100%',
            color: 'white',
            fontFamily:'Open Sans',
          },
          logo: {
            margin: '0 auto',
            zIndex: '-1',
            textDecoration: 'none',
          },
        }
    const menu = [
        {
            'text': 'home',
            'link': '/',
        },
        {
            'text': 'school things',
            'link': '/coursework',
        },
        {
            'text': 'projects',
            'link': '/projects',
        },
        {
            'text': 'resume',
            'link': '/resume',
        },
        {
            'text': 'about',
            'link': '/about',
        },
    ]
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          link={val.link}
          onClick={()=>{this.handleLinkClick();}}>{val.text}</MenuItem>)
    });
    
    return(
      <div className="menu-toggle">
        <div style={styles.container}>
            <Link to="/" className="logo">
                <AnimatedText textColor="#ffffff" overlayColor="#c01c74">cindy wang</AnimatedText>
            </Link>
            <Link to="/" className="logo-mobile">
                <AnimatedText textColor="#ffffff" overlayColor="#ffffff">cindy wang</AnimatedText>
            </Link>
            
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
          
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
      </div>

    );
  }
}

export default Hamburger;
  
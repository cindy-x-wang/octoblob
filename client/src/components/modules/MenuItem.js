import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Hamburger.css";

class MenuItem extends Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      }
    }
    
    handleHover(){
      this.setState({hover:!this.state.hover});
    }
    
    render(){
      const styles={
        container: {
          opacity: 0,
          animation: '1s appear forwards',
          animationDelay:this.props.delay,
          textDecoration: 'none',
        },
        menuItem:{
          fontFamily:`'Fira Sans', sans-serif`,
          fontSize: '1.2rem',
          fontWeight: '200',
          letterSpacing: '1px',
          textDecoration: 'none',
          padding: '1rem 0',
          margin: '0 5%',
          cursor: 'pointer',
          color: this.state.hover? '#C01C74':'#fafafa',
          transition: 'color 0.2s ease-in-out',
          animation: '0.5s slideIn forwards',
          animationDelay:this.props.delay,
  
        },
        line: {
          width: '90%',
          height: '1px',
          background: '#fafafa',
          margin: '0 auto',
          animation: '0.5s shrink forwards',
          animationDelay:this.props.delay,
          
        }
      }
      return(
        <Link to={this.props.link} style={styles.container}>
          <div 
            style={styles.menuItem} 
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
          >
            {this.props.children}  
          </div>
        <div style={styles.line}/>
      </Link>  
      )
    }
  }

  export default MenuItem;
import React, { Component } from "react";

import "../../utilities.css";
import "./Octoblob.css";

import Sitting_Avatar from "./art/Sitting_Avatar.png";
import Mountain_Border from "./art/mountain_border.png";
import Blob_Avatar from "./art/pink_blob_avatar.png";

import SemesterCard from "../modules/SemesterCard.js";

const allSemesters = [
  
  {
    "semName": "Spring 2020",
    "semNum": 2,
  },
  {
    "semName": "Fall 2019",
    "semNum": 1,
  },
]

const allCourses = [
  {
    "CS": true,
    "semester": 2,
    "name": "Introduction to Algorithms",
    "number": 6.006,
    "description": "Introduction to mathematical modeling of computational problems, as well as common algorithms, algorithmic paradigms, and data structures used to solve these problems.",
    "commentary": "this sucked"
  },
  {
    "CS": true,
    "semester": 2,
    "name": "Fundamentals of Programming",
    "number": 6.009,
    "description": "Introduces fundamental concepts of programming. Designed to develop skills in applying basic methods from programming languages to abstract problems.",
    "commentary": "this sucked"
  },
  {
    "CS": false,
    "semester": 2,
    "name": "Probability and Random Variables",
    "number": "18.600",
    "description": "Probability spaces, random variables, distribution functions. Binomial, geometric, hypergeometric, Poisson distributions. Uniform, exponential, normal, gamma and beta distributions. Conditional probability, Bayes theorem, joint distributions. Chebyshev inequality, law of large numbers, and central limit theorem.",
    "commentary": "this sucked"
  },
  {
    "CS": false,
    "semester": 2,
    "name": "Chinese IV (Streamlined)",
    "number": "21G.110",
    "description": "This is the second semester of the intermediate level sequence intended for students whose conversational ability exceeds their reading and writing skills.",
    "commentary": "I liked this! The prof had great Chinese TV show recs :)"
  },
  {
    "CS": true,
    "semester": 1,
    "name": "Introduction to Computational Thinking and Data Science",
    "number": 6.0002,
    "description": "An introduction to different kinds of computational problems, such as graph algorithms, Monte Carlo simulations, and machine learning.",
    "commentary": "this sucked"
  },
  {
    "CS": true,
    "semester": 1,
    "name": "Introduction to Computer Science and Programming in Python",
    "number": 6.0001,
    "description": "Provide an understanding of the role computation can play in solving problems.",
    "commentary": "this sucked"
  },
  {
    "CS": false,
    "semester": 1,
    "name": "Physics II: Electricity and Magnetism",
    "number": 8.02,
    "description": "We want to be able to describe, in words, the ways in which various concepts in electromagnetism come into play in particular situations; to represent these electromagnetic phenomena and fields mathematically in those situations; and to predict outcomes in other similar situations.",
    "commentary": "zap"
  },
  {
    "CS": false,
    "semester": 1,
    "name": "Multivariable Calculus",
    "number": 18.02,
    "description": "Vector and multi-variable calculus. Topics include vectors and matrices, partial derivatives, double and triple integrals, and vector calculus in 2 and 3-space.",
    "commentary": "Did I finally understand integration? We'll see."
  },
  {
    "CS": false,
    "semester": 1,
    "name": "What is Capitalism?",
    "number": "21A.461",
    "description": "This class addresses the question \"what is capitalism?\" from a social scientific point of view, rather than a classical economic one.",
    "commentary": "Did I finally understand integration? We'll see."
  },
];

class Octoblob extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      showingCSOnly: false,
      showingDescriptions: false,
      showingCommentary: false,
      allCourses: allCourses,
      allSemesters: allSemesters,
    };
  }

  toggleShowingCSOnly = () => {
    this.setState((prevState) => ({ showingCSOnly: !prevState.showingCSOnly }));
  };

  toggleShowingDescriptions = () => {
    this.setState((prevState) => ({ showingDescriptions: !prevState.showingDescriptions }));
  };

  toggleShowingCommentary = () => {
    this.setState((prevState) => ({ showingCommentary: !prevState.showingCommentary }));
  };

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return(
    <>
    <div className="head-container-intro">
      <div className="blob-container">
        <img src={Blob_Avatar} height="800px" >
        </img>
      </div>
    </div>
    <div className="intro-container">
      <div className="intro-text">
          Hi, I'm Cindy! 
      </div>
      <div className="intro-text-small">
        I’m currently studying computer science-y things at MIT, 
        have one (1) angry cat, and love boba way more than I should.
      </div>
    </div>



    {/* <div className="mountain-border">
        <img src={Mountain_Border}  width="100%">
        </img>
    </div> */}

    <div className="head-container-classes">
      <div className="page-title">
        school things
      </div>
      <div className="coursework-page-container">
        <div className="coursework-description-container">
          <div className="coursework-description-text">
          School is very important to me! Although I am currently a Course 6-2 (which means Electrical Engineering and Computer Science), I may soon become a lowly 6-3 (Computer Science) because I am falling into the trap of <i>enjoying</i> programming.
          <br></br><br></br>
          Here I’ve listed all my coursework with varying levels of detail and commentary. Proceed at your own risk.
          </div>

        </div>
        <div className="coursework-list-container">
          <div className="button-container">
            <button onClick={this.toggleShowingCSOnly}>
              cs-related only
            </button>
            
            <button onClick={this.toggleShowingDescriptions}>
              descriptions
            </button>
            <button onClick={this.toggleShowingCommentary}>
              unnecessary commentary
            </button>

          </div>
          <div className="coursework-list-box">
            {this.state.allSemesters.map((s) => (
              <div>
                <SemesterCard sem={s} allCourses={this.state.allCourses} showingCSOnly={this.state.showingCSOnly} showingDescriptions={this.state.showingDescriptions} showingCommentary={this.state.showingCommentary} />
              </div>
              ))
            }
            
          </div>

        </div>
      </div>
    </div>
  </>
    );
  }
}

export default Octoblob;

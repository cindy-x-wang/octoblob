import React, { Component } from "react";

import "../../../utilities.css";
import "./projectTemplate.css";

import {AnimatedText} from "../../modules/AnimatedText/AnimatedText";
import Footer from "../../modules/Footer.js";
import habitaquarium_home from "./habitaquarium_home.png";
import habitaquarium_habits from "./habitaquarium_habits.png";
import habitaquarium_ray from "./habitaquarium_ray.png";

class HabitAquarium extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return(
    <>
        <div className="head-container-project-page">
            <div className="project-page-section">
                <a style={{textDecoration:"none"}} href="https://habitaquarium.herokuapp.com" target="_blank">
                    <a className="project-text-bold">
                        Habit Aquarium
                    </a>
                    <a className="link-icon-spacing">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
                    </a>
                </a>
                <p className="project-text">
                    Habit Aquarium is a site that I created with two teammates for MIT's <a href="http://weblab.mit.edu/">web.lab</a> (2 week webdev crash course + competition between fall and spring semesters).
                </p>
                <p className="project-text">
                    When I say crash course, I mean I got tossed into the deep end and went from having zero JavaScript knowledge to being able to create my own website. During these short weeks, I learned a ton, struggled even more, stayed up with my teammates to debug and make progress, came up with stuff, then scrapped it, rinse and repeat.
                </p>
                <p className="project-text">
                    Habit Aquarium is a aquarium (duh) meant to help users build better habits. I personally have a hard time with habits, because they fall into the category of things that are important but not urgent, and since I prioritize urgent tasks...
                </p>
                <p className="project-text">
                    We wanted it to be a site that would fit into your day seamlessly while motivating you to look at your habits daily as a reminder. What better way than adorable fish?
                </p>
                <figure>
                    <img src={habitaquarium_home} alt="home page" class="responsive"></img>
                    <figcaption>Home page with Google login</figcaption>
                </figure>
                <p className="project-text">
                    The goal is to fill your page with lovable, stress-relieving, home-grown fish (drawn in-house too). They swim around in the background, and sometimes I find myself watching them float randomly across the page. In order to motivate users to return to the site, the fish must be fed daily! Not feeding your fish for 3 conscecutive days will result in your oldest fish...expiring.
                </p>
                <p className="project-text">
                    The goal is to fill your page with lovable, stress-relieving, home-grown fish (drawn in-house too). They swim around in the background, and sometimes I find myself watching them float randomly across the page. In order to motivate users to return to the site, the fish must be fed daily! Not feeding your fish for 3 conscecutive days will result in your oldest fish...expiring.
                </p>
                <figure>
                    <img src={habitaquarium_habits} alt="habit tracking page" class="responsive"></img>
                    <figcaption>habit tracker</figcaption>
                </figure>
                <p className="project-text">
                    Completing tasks earns you sand dollars, which you can use to purchase more fish at the fish store!
                </p>
                <p className="project-text">
                    The fish store is run by an aquarium enthusiast named Ray (just like my actual friend Ray, the aquarium enthusiast). You can chat him to purchase fish to add to your collection. I am extra proud of this page because I was wholly responsible for it, from the idea of having a chatbot instead of a traditional store, to the frontend and backend implementation.
                </p>
                <figure>
                    <img src={habitaquarium_ray} alt="habit tracking page" class="responsive"></img>
                    <figcaption>fish store: chat with the owner Ray :)</figcaption>
                </figure>
                <p className="project-text">
                    Ultimately as my first site ever, this project gave me the confidence to start my own website. Even if it was just blundering along and Googling something every 5 minutes, I had a lot of fun creating a site of my very own.
                </p>
                <p className="project-text">
                    Things we used: React, MongoDB, herokuapp
                </p>
            </div>

        </div>
        <Footer/>
    </>
    );
  }
}

export default HabitAquarium;

import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Introduction from "./Introduction";
import Title from "./Title";
import Header from "./Header";
import "../index.css";

import profile from "../assets/profile.png";

//import ReactDOM from "react-dom";
class App extends Component {
  state = { displayBio: false };
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <Header />
        <img src={profile} alt="profile" className="profile" />
        {/* <h1>Hello!</h1> */}
        {/* <p>My name is Sneha.</p> */}

        <Introduction />
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>

        {this.state.displayBio ? (
          <div>
            <p>I live in Crawley, and code every day.</p>
            <p>My favourite language is JavaScript</p>
            <p>Besides coding, I also love reading books and sketching.</p>
            <p>
              I've created real world APPLICATIONS and interesting GAMES using
              JavaScript and other modern framework and libraries
            </p>
            <p>
              Managing social media for my blog with a following of over 3000 &
              worked with Kids brand as an influencer.
            </p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;

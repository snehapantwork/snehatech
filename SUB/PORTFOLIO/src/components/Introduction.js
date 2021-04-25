import React, { Component } from "react";
import INTRO from "../data/introduction";

class Intro extends Component {
  render() {
    const { text, image } = this.props.introProfile;

    return (
      <div>
        {/* <img src={image} alt="profile-pic" /> */}
        <p>{text}</p>
      </div>
    );
  }
}

class Introduction extends Component {
  render() {
    return (
      <header className="section content-wrap">
        <div>
          <h1>Hello! </h1>
          {/* <div>
            <img src="profileimage" width="100" height="100"></img>
          </div> */}
          <div className="top">
            <div>
              <h2>My name is Sneha Pant</h2>
              <div>
                {INTRO.map((INTRO_OBJ) => {
                  return <Intro key={INTRO_OBJ.id} introProfile={INTRO_OBJ} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Introduction;

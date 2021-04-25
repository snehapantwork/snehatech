import React, { Component } from "react";

const TITLES = [" A WEB DEVELOPER", "BLOGGER", "ARTIST"];

class Title extends Component {
  state = {
    titleIndex: 0,
  };

  componentDidMount() {
    // console.log("Title componenet has mounted");
    this.animateTitles();
  }
  componentWillUnmount() {
    clearInterval(this.titleInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex: titleIndex });
    }, 4000);
  };

  render() {
    const title = TITLES[this.state.titleIndex];
    return <p> {title}</p>;
  }
}

export default Title;

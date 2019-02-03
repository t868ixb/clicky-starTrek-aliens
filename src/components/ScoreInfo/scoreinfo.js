//sets up the reusable Navbar component
import React, { Component } from "react";
import "./style.css";

class ScoreInfo extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Remember Your Clicks!</li>
          <li className="itemCenter">Message: {this.props.message}</li>
          <li className="itemRight">Score: {this.props.score}</li>
          {/* <li className="itemRight">Score: {this.state.score}</li> */}
        </ul>
      </nav>
    );
  }
}

export default ScoreInfo;
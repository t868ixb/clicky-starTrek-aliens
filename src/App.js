import React, { Component } from "react";
import AlienCard from "./components/AlienCard";
import Wrapper from "./components/Wrapper";
import ScoreInfo from "./components/ScoreInfo";
import aliens from "./startrekaliens.json";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  // Setting this.state.aliens to the aliens json array
  state = {
    message: "Click an image to start",
    aliens,
    clickedAlien: [],
    score: 0
  };

  //when you click on an alien ... the Alien goes bye bye (removed from array)
  
  imageClick = event => {
    const currentAlien = event.target.alt;
    const AlienAlreadyClicked =
      this.state.clickedAlien.indexOf(currentAlien) > -1;

//if you click on an Alien that has already been selected, the game is reset and cards reordered
if (AlienAlreadyClicked) {
  this.setState({
    aliens: this.state.aliens.sort(function(a, b) {
      return 0.5 - Math.random();
    }),
    clickedAlien: [],
    score: 0,
    "message": "You Lose, start over"
  });

//if you click on an available Alien, score increases by 1 and cards reordered
} else {
  this.setState(
    {
      aliens: this.state.aliens.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedAlien: this.state.clickedAlien.concat(
        currentAlien
      ),
      score: this.state.score + 1
    },
//get all 12 Aliens correctly and you get a virtual chip (game resets)       
    () => {
      if (this.state.score === 12) {
        this.setState({
          aliens: this.state.aliens.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedAlien  : [],
          score: 0,
          "message": "You Win! And you're a nerd!!!"
        });
      }
    }
  );
}
};

  // Map over this.state.aliens and render an AlienCard component for each alien object
  render() {
    return (
      <div>
        <Jumbotron />
        <ScoreInfo 
        score={this.state.score}
        message={this.state.message}
        />
      <Wrapper>
        {this.state.aliens.map(aliens => (
          <AlienCard
            removeAlien={this.removeAlien}
            imageClick={this.imageClick}
            id={aliens.id}
            key={aliens.id}
            name={aliens.name}
            image={aliens.image}
            firstAppearance={aliens.firstAppearance}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { hot } from "react-hot-loader";

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
class App extends Component {
    render() {
        return (
            <div className="App">
            <h1>Jotto</h1>
            <Congrats succes={false}></Congrats>
            <GuessedWords guessedWords={[]}></GuessedWords>
            </div>
        );
    }
}

export default hot(module)(App);
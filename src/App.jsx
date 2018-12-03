import React, { Component } from "react";
import { hot } from "react-hot-loader";
import {connect} from 'react-redux';
import {getSecretWord} from './actions'
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
class App extends Component {
    render() {
        return (
            <div className="App">
            <h1>Jotto</h1>
            <Congrats success={true}></Congrats>
            <GuessedWords guessedWords={[{ guessedWord:'train', letterMatchCount: 3}]}></GuessedWords>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { success, guessedWords, secretWord } = state;
    return { success, guessedWords, secretWord }
}
export default connect(mapStateToProps, {getSecretWord})(App);
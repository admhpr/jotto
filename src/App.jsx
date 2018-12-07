import React, { Component } from "react";
import {connect} from 'react-redux';
import {getSecretWord} from './actions'
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from "./Input";
import { Columns, Container } from "react-bulma-components/full";

export class UnconnectedApp extends Component {
    componentDidMount(){
        this.props.getSecretWord();
    }
    render() {
        return (
            <Container>
                <div className="spacer">

                </div>
                <Columns>
                    <Columns.Column>
                        <div className="App">
                        <h1>Jotto</h1>
                        <Congrats success={this.props.success}></Congrats>
                        <Input/>
                        <GuessedWords guessedWords={this.props.guessedWords}></GuessedWords>
                        </div>
                    </Columns.Column>
                </Columns>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { success, guessedWords, secretWord } = state;
    return { success, guessedWords, secretWord }
}
export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
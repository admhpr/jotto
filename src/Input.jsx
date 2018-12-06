import React, {Component} from "react";
import {connect} from 'react-redux';
import {guessWord} from './actions'
import { Button, Columns } from "react-bulma-components/full";

export class UnconnectedInput extends Component{
    constructor(props){
        super(props);
        this.inputBox = React.createRef();
        this.submitGuessedWord = this.submitGuessedWord.bind(this)
    }
    submitGuessedWord(evt){
        // prevent default
        evt.preventDefault()
        const guessedWord = this.inputBox.current.value
        if(guessedWord && guessedWord.length > 0){
            this.props.guessWord(guessedWord)
        }
        this.inputBox.current.value = ''; 
    }
    render(){
        const contents = this.props.success ? null : (
            <form>
                <input ref={this.inputBox} id="word-guess" placeholder="enter a guess" data-test="component-box"/>
                <Button type="submit" data-test="submit-button" onClick={this.submitGuessedWord}>
                    Submit
                </Button>
            </form>
        );
        return( 
            <div data-test="component-input">
                {contents}
            </div>
        )
    }
}

const mapStateToProps = ({success}) => {
    return {success};
}

export default connect(mapStateToProps, {guessWord})(UnconnectedInput)
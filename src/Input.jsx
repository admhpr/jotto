import React, {Component} from "react";
import {connect} from 'react-redux';
import {guessWord} from './actions'


class Input extends Component{
    render(){
        const contents = this.props.success ? null : (
            <form>
                <input id="word-guess" placeholder="enter a guess" data-test="component-box"/>
                <button type="submit" data-test="submit-button">
                    Submit
                </button>
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

export default connect(mapStateToProps, {guessWord})(Input)
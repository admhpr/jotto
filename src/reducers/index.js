import {combineReducers} from 'redux';
import success from './success_reducer';
import guessedWords from './guessed_words_reducer';

export default combineReducers({
    success,
    guessedWords,
})


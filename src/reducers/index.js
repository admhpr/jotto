import {combineReducers} from 'redux';
import success from './success_reducer';
import guessedWords from './guessed_words_reducer';
import secretWord from './secret_word_reducer';

export default combineReducers({
    success,
    guessedWords,
    secretWord,
})


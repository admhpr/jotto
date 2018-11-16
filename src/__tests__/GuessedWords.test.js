import React from 'react';
import {
    findByAttr,
    checkProps
} from './testUtils';
import GuessedWords from '../GuessedWords';
import {
    shallow
} from 'enzyme';

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}],
};

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow( <GuessedWords {...setupProps}/> )
}

test('renders without error', () => {
    const wrapper = shallow( <GuessedWords / > );
});

test('does not throw any warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
})
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
};

test('does not throw any warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
})

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] })
    })
    test('renders without error', () => {
        const component = findByAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    })
    test('renders instructions to guess a word', () => {
        const instructions = findByAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0)
    })
})

describe('if there are words guessed', () => {

})
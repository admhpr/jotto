import React from 'react';
import {
    findByAttr,
    checkProps
} from './testUtils';
import GuessedWords from '../GuessedWords';
import {
    shallow
} from 'enzyme';

test('renders without error', () => {
    const wrapper = shallow( <GuessedWords / > );
})
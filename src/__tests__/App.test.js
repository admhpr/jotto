import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

test('renders without error', () => {
    const wrapper = shallow(<App/>);
})
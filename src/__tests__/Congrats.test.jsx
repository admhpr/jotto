import React from 'react';
import Congrats from '../Congrats';

const setup = (props={}) => {
    return shallow(<Congrats {...props}/>)
}
test('renders without error', () => {

});

test('renders no text when `success` is false', () => {

})

test('renders non-empty congrats message on `success` prop being true', () => {

})

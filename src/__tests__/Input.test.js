import React from 'react';
import {
    findByAttr,
    checkProps,
    storeFactory
} from './testUtils';
import Input from '../Input';
import {
    shallow
} from 'enzyme';

const setup  = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>).dive();
    
}


describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders component without error', () => {
            
        })
        test('renders input box', () => {
            
        })
        test('renders submit button', () => {
            
        })
    })
    describe('word has been guessed', () => {

        test('renders component without error', () => {

        })
        test('renders not input box', () => {

        })
        test('renders not submit button', () => {

        })


    })
})

describe('update state', () => {

})
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
    return wrapper
}


describe('render', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {success: false}
        wrapper = setup(initialState)
    })
    describe('word has not been guessed', () => {
        test('renders component without error', () => {
            const component = findByAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('renders input box', () => {
            const component = findByAttr(wrapper, 'component-box')
            expect(component.length).toBe(1)
        })
        test('renders submit button', () => {
            const component = findByAttr(wrapper, 'submit-button')
            expect(component.length).toBe(1)
        })
    })
    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {
                success: true
            }
            wrapper = setup(initialState)
        })
        test('renders component without error', () => {
            const component = findByAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('renders not input box', () => {
            const component = findByAttr(wrapper, 'component-box')
            expect(component.length).toBe(0)
        })
        test('renders not submit button', () => {
             const component = findByAttr(wrapper, 'submit-button')
             expect(component.length).toBe(0)
        })


    })
})

describe('update state', () => {

})
import React from 'react';
import {
    findByAttr,
    checkProps,
    storeFactory
} from './testUtils';
import Input, {UnconnectedInput} from '../Input';
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
    describe('redux props', () => {
        test('has success piece of state as prop', () => {
            const success = true
            const wrapper = setup({success})
            const successProp = wrapper.instance().props.success
            expect(successProp).toBe(success)
        })
    })
    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setup()
        const guessWordProp = wrapper.instance().props.guessWord
        expect(guessWordProp).toBeInstanceOf(Function)
    })
})

describe('`guessWord` action creator call', () => {
    test('calls `guessWord` when button is clicked', () => {
        const guessWordMock = jest.fn()
        const props = {
            guessWord: guessWordMock,
        }
  

        // set up app component with guessWordMock as the guessWord pop
        const wrapper = shallow(<UnconnectedInput {...props}/>)

        // simulate click
        const submitButton = findByAttr(wrapper, 'submit-button')
        submitButton.simulate('click')

        //check to see if mock ran
        const guessWordCount = guessWordMock.mock.calls.length

        expect(guessWordCount).toBe(1)

    })
})
import checkPropTypes from 'check-prop-types';
import {createStore} from 'redux';

import rootReducer from '../reducers';

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
} 

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name)
    expect(propError).toBeUndefined();
}
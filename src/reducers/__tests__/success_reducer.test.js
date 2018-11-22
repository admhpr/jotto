import {actionTypes} from '../../actions/index';
import successReducer from '../success_reducer';

test('returns default state of `false` if no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);

})

test('retursn state of true upon receiving an action type of `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
})
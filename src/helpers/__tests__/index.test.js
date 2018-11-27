import {getLetterMatchCount} from '../index';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';

    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord)  
        expect(letterMatchCount).toBe(0)  
    })
    test('returns the correct number of words when there are three matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3)
    })
    test('returns correct count when there are duplicate letters', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord)
        expect(letterMatchCount).toBe(3);
    })
})
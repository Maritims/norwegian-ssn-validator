import { validateControlDigits } from '../src/getControlDigitsFromSsn'

describe('it should succeed', () => {
    test('when the control digits are valid', () => {
        // arrange
        const ssn = '01015111190'

        // act
        const result = validateControlDigits(ssn)

        // assert
        expect(result).toBe(true)
    })
})

describe('it should fail', () => {
    test('when the control digits are invalid', () => {
        // arrange
        const ssn = '01015111111'

        // act
        const result = validateControlDigits(ssn)

        // assert
        expect(result).toBe(false)
    })
})
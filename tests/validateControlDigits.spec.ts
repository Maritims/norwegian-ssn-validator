import { validateControlDigits } from '../src/validateControlDigits'

describe('it should succeed', () => {
    test('when the control digits are valid', () => {
        // arrange
        const ssn = '01015111190'

        // act
        const result = validateControlDigits(ssn)

        // assert
        expect(result).toBe(true)
    })

    test('when the date of birth is from a D-number', () => {
        // arrange
        const ssn = '41015111184'

        // act
        const result = validateControlDigits(ssn)

        // assert
        expect(result).toBe(true)
    })

    test('when the date of birth is from an H-number', () => {
        // arrange
        const ssn = '01415111173'

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
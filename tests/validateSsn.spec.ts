import { InvalidBirthDateError } from '../src/errors/InvalidBirthDateError'
import { InvalidIndividualDigitsError } from '../src/errors/InvalidIndividualDigitsError'
import { InvalidSsnError } from '../src/errors/InvalidSsnError'
import { validateSsn } from '../src/validateSsn'

describe('it should succeed', () => {
    test('when the ssn is valid', () => {
        // arrange
        const ssn = '01015111111'

        // act
        const result = validateSsn(ssn)

        // assert
        expect(result).toBe(true)
    })
})

describe('it should fail', () => {
    test('when the length of the ssn is invalid', () => {
        // arrange
        const ssn = '123'

        // act
        // assert
        expect(() => validateSsn(ssn)).toThrow(InvalidSsnError)
    })

    test('when the ssn is not made up of precisely 11 digits', () => {
        // arrange
        const ssn = '010151abcde'

        // act
        // assert
        expect(() => validateSsn(ssn)).toThrow(InvalidSsnError)
    })

    test('when the date of birth is invalid', () => {
        // arrange
        const ssn = '01135111111'

        // act
        // assert
        expect(() => validateSsn(ssn)).toThrow(InvalidBirthDateError)
    })

    test('when the date of birth and individual digits do not match', () => {
        // arrange
        const ssn = '01015150011'

        // act
        //assert
        expect(() => validateSsn(ssn)).toThrow(InvalidIndividualDigitsError)
    })
})
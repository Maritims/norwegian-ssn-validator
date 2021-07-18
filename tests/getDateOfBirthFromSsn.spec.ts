import { InvalidBirthDateError } from '../src/errors/InvalidBirthDateError'
import { getDateOfBirthFromSsn } from '../src/getDateOfBirthFromSsn'

describe('it should suceed', () => {
    test('when the date of birth is valid', () => {
        // arrange
        const ssn = '01015111111'

        // act
        const dateOfBirth = getDateOfBirthFromSsn(ssn)

        // assert
        expect(dateOfBirth instanceof Date).toBe(true)
        expect(isNaN(dateOfBirth.getTime())).toBe(false)
    })
})

describe('it should fail', () => {
    test('when the date of birth is invalid', () => {
        // arrange
        const ssn = '01135111111'

        // act
        // assert
        expect(() => getDateOfBirthFromSsn(ssn)).toThrow(InvalidBirthDateError)
    })
})
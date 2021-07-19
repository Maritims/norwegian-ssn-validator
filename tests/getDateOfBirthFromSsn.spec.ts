import { getDateOfBirthFromSsn } from '../src/getDateOfBirthFromSsn'

describe('it should succeed', () => {
    test('when the date of birth is valid', () => {
        // arrange
        const ssn = '01015111111'

        // act
        const dateOfBirth = getDateOfBirthFromSsn(ssn)

        // assert
        expect(isNaN(dateOfBirth.getTime())).toBe(false)
    })
})

describe('it should fail', () => {
    test('when the date of birth is invalid', () => {
        // arrange
        const ssn = '01135111111'

        // act
        const result = getDateOfBirthFromSsn(ssn)

        // assert
        expect(isNaN(result.getTime())).toBe(true)
    })
})
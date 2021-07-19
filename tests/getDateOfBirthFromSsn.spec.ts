import { getDateOfBirthFromSsn } from '../src/validateDateOfBirth'

describe('it should succeed', () => {
    test('when the date of birth is valid', () => {
        // arrange
        const ssn = '01015111111'

        // act
        const dateOfBirth = getDateOfBirthFromSsn(ssn)

        // assert
        expect(isNaN(dateOfBirth.getTime())).toBe(false)
    })

    test('when the date of birth is from a D-number', () => {
        // arrange
        const ssn = '41015111111'

        // act
        const dateOfBirth = getDateOfBirthFromSsn(ssn)

        // assert
        expect(isNaN(dateOfBirth.getTime())).toBe(false)
        expect(dateOfBirth.getDay()).toBe(1)
    })

    test('when the date of birth is from an H-number', () => {
        // arrange
        const ssn = '01415111111'

        // act
        const dateOfBirth = getDateOfBirthFromSsn(ssn)

        // assert
        expect(isNaN(dateOfBirth.getTime())).toBe(false)
        expect(dateOfBirth.getMonth()).toBe(0) // Remember that months in JavaScript are null indexed so 0 = January, 1 = Februry etc...
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
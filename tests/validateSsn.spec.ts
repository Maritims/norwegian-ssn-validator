import { validateSsn } from '../src/validateSsn'
import { ValidationErrorCode } from '../src/ValidationErrorCode'
import './toBeWithErrorMessage'

describe('it should succeed', () => {
    test('when the ssn is valid', () => {
        // arrange
        const ssn = '01015111190'

        // act
        const result = validateSsn(ssn)

        // assert
        expect(result.isSuccess()).toBe(true)
    })

    test('when the ssn is a D-number', () => {
        // arrange
        const ssn = '41015111184'

        // act
        const result = validateSsn(ssn)

        // assert
        expect(result.isSuccess()).toBe(true)
    })

    test('when the ssn is an H-number', () => {
        // arrange
        const ssn = '01415111173'

        // act
        const result = validateSsn(ssn)

        // assert
        expect(result.isSuccess()).toBe(true)
    })
})

describe('it should fail', () => {
    test('when the length of the ssn is invalid', () => {
        // arrange
        const ssn = '123'

        // act
        const result = validateSsn(ssn)

        // assert
        expect(result.isSuccess()).toBe(false)
        expect(result.errorCode).toBe(ValidationErrorCode.InvalidSsnFormat)
    })

    test('when the ssn is not made up of precisely 11 digits', () => {
        // arrange
        const ssn = '010151abcde'

        // act
        const result = validateSsn(ssn)

        // assert
        expect(result.isSuccess()).toBe(false)
        expect(result.errorCode).toBe(ValidationErrorCode.InvalidSsnFormat)
    })

    test('when the date of birth is invalid', () => {
        // arrange
        const ssn = '01135111111'

        // act
        const result = validateSsn(ssn)

        // assert
        expect(result.isSuccess()).toBe(false)
        expect(result.errorCode).toBe(ValidationErrorCode.InvalidBirthDate)
    })

    test('when the date of birth and individual digits do not match', () => {
        // arrange
        const ssn = '01015150011'

        // act
        const result = validateSsn(ssn)

        //assert
        expect(result.isSuccess()).toBe(false)
        expect(result.errorCode).toBe(ValidationErrorCode.InvalidIndividualDigits)
    })
})
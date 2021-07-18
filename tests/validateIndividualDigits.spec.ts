import { validateIndividualDigits } from '../src/validateIndividualDigits'
import './toBeExpectedBoolean'

const IS_VERBOSE = Boolean(process.env.TEST_VALIDATE_INDIVIDUAL_DIGITS_VERBOSE || false)
const ITERATIONS = Number(process.env.TEST_VALIDATE_INDIVIDUAL_DIGITS_ITERATIONS || 1000)

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
 const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min)

 const getRandomBirthDate = (minYear: number, maxYear: number, isVerbose: boolean): Date => {
    const randomBirthMonth = getRandomNumber(1, 13).toString().padStart(2, '0')
    const randomBirthYear = getRandomNumber(minYear, maxYear)
    const randomBirthDate = new Date(`${randomBirthYear}-${randomBirthMonth}-01`)

    if(isVerbose) console.log(`Testing with random birth date: ${randomBirthDate}`)

    return randomBirthDate
 }

 const testValidateIndividualDigits = (minValue: number, maxValue: number, minYear: number, maxYear: number, iterations: number, shouldSucceed: boolean): void => {
     for(let i = 0; i < iterations; i++) {
        // arrange
        const individualDigits = getRandomNumber(minValue, maxValue)
        const dateofBirth = getRandomBirthDate(minYear, maxYear, IS_VERBOSE)

        // act
        const result = validateIndividualDigits(individualDigits, dateofBirth)

        // assert
        expect(result).toBeExpectedBoolean(shouldSucceed, `[individualDigits:${individualDigits}, dateOfBirth:${dateofBirth.toISOString()}, expected:${shouldSucceed}]`)
     }
 }

describe('it should succeed', () => {
    test('when individualDigits is 0-499 and birth year is 1900-1999', () => testValidateIndividualDigits(0, 500, 1900, 2000, ITERATIONS, true))
    test('when individualDigits is 500-749 and birth year is 1854-1899', () => testValidateIndividualDigits(500, 750, 1854, 1900, ITERATIONS, true))
    test('when individualDigits is 500-999 and birth year is 2000-2039', () => testValidateIndividualDigits(500, 1000, 2000, 2040, ITERATIONS, true))
    test('when individualDigits is 900-999 and birth year is 1940-1999', () => testValidateIndividualDigits(900, 1000, 1940, 2000, ITERATIONS, true))
})

describe('it should fail', () => {
    test('when individualDigits is 0-499 and birth year is not 1900-1999', () => testValidateIndividualDigits(0, 500, 2000, 2001, ITERATIONS, false))
    test('when individualDigits is 500-749 and birth year is not 1854-1899', () => testValidateIndividualDigits(500, 750, 1900, 1901, ITERATIONS, false))
    test('when individualDigits is 500-999 and birth year is not 2000-2039', () => testValidateIndividualDigits(500, 1000, 2040, 2041, ITERATIONS, false))
    test('when individualDigits is 900-999 and birth year is not 1940-1999', () => testValidateIndividualDigits(900, 1000, 1939, 1940, ITERATIONS, false))
})
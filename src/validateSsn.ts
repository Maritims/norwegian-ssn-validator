import { InvalidSsnError } from './errors/InvalidSsnError'
import { getDateOfBirthFromSsn } from './getDateOfBirthFromSsn'
import { validateIndividualDigits } from './validateIndividualDigits'

const EXPECTED_LENGTH_OF_SSN = 11
const SSN_REGEX = /\d{11}/

export const validateSsn = (value: string): boolean => {
    if(value.length != EXPECTED_LENGTH_OF_SSN) throw new InvalidSsnError(value, `Expected length is ${EXPECTED_LENGTH_OF_SSN}`)
    if(!SSN_REGEX.test(value)) throw new InvalidSsnError(value, `Value should contain exactly 11 digits and nothing else`)

    const dateOfBirth = getDateOfBirthFromSsn(value)
    const individualDigits = Number(value.slice(6, 9))
    validateIndividualDigits(individualDigits, dateOfBirth)

    return true
}
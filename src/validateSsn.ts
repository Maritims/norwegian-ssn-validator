import { getDateOfBirthFromSsn, validateDateOfBirth } from './validateDateOfBirth'
import { validateControlDigits } from './validateControlDigits'
import { validateIndividualDigits } from './validateIndividualDigits'
import { ValidationErrorCode } from './ValidationErrorCode'
import { ValidationResult } from './ValidationResult'

export const validateSsn = (value: string): ValidationResult => {
    if(!/\d{11}/.test(value)) return new ValidationResult(ValidationErrorCode.InvalidSsnFormat)

    const dateOfBirth = getDateOfBirthFromSsn(value)
    const individualDigits = Number(value.slice(6, 9))

    if(!validateDateOfBirth(dateOfBirth)) return new ValidationResult(ValidationErrorCode.InvalidBirthDate)
    if(!validateIndividualDigits(individualDigits, dateOfBirth)) return new ValidationResult(ValidationErrorCode.InvalidIndividualDigits)
    if(!validateControlDigits(value)) return new ValidationResult(ValidationErrorCode.InvalidControlDigits)

    return new ValidationResult()
}
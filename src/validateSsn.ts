import { getDateOfBirthFromSsn } from './getDateOfBirthFromSsn'
import { validateIndividualDigits } from './validateIndividualDigits'
import { ValidationErrorCode } from './ValidationErrorCode'
import { ValidationResult } from './ValidationResult'

export const validateSsn = (value: string): ValidationResult => {
    if(!/\d{11}/.test(value)) return new ValidationResult(ValidationErrorCode.InvalidSsnFormat)

    const dateOfBirth = getDateOfBirthFromSsn(value)
    if(!(dateOfBirth instanceof Date) || isNaN(dateOfBirth.getTime())) return new ValidationResult(ValidationErrorCode.InvalidBirthDate)

    const individualDigits = Number(value.slice(6, 9))
    if(!validateIndividualDigits(individualDigits, dateOfBirth)) return new ValidationResult(ValidationErrorCode.InvalidIndividualDigits)


    return new ValidationResult()
}
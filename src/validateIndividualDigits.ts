import { InvalidIndividualDigitsError } from "./errors/InvalidIndividualDigitsError"

export const validateIndividualDigits = (individualDigits: number, dateOfBirth: Date): boolean => {
    // 0-499: Persons born between 1900-1999
    if(individualDigits >= 0 && individualDigits <= 499 && dateOfBirth.getFullYear() >= 1900 && dateOfBirth.getFullYear() <= 1999) return true

    // 500-749: Persons born between 1854-1899
    if(individualDigits >= 500 && individualDigits <= 749 && dateOfBirth.getFullYear() >= 1854 && dateOfBirth.getFullYear() <= 1899) return true

    // 500-999: Persons born between 2000-2039
    if(individualDigits >= 500 && individualDigits <= 999 && dateOfBirth.getFullYear() >= 2000 && dateOfBirth.getFullYear() <= 2039) return true

    // 900-999: Persons born between 1940-1999
    if(individualDigits >= 900 && individualDigits <= 999 && dateOfBirth.getFullYear() >= 1940 && dateOfBirth.getFullYear() <= 1999) return true

    throw new InvalidIndividualDigitsError(individualDigits, dateOfBirth)
}
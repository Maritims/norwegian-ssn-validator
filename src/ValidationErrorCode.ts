export enum ValidationErrorCode {
    InvalidBirthDate,           // Birth date is not a valid date.
    InvalidIndividualDigits,    // Birth date does not match individual digits.
    InvalidSsnFormat            // Provided SSN does not conform to the expected format.
}
export class InvalidIndividualDigitsError extends Error {
    constructor(individualDigits: number, dateOfBirth: Date) {
        super(`Individual digits and birth date do not match [individualDigits:${individualDigits}, dateOfBirth:${dateOfBirth}]`)
        Object.setPrototypeOf(this, InvalidIndividualDigitsError.prototype)

        this.individualDigits = individualDigits
        this.dateOfBirth = dateOfBirth
    }

    individualDigits: number
    dateOfBirth: Date
}
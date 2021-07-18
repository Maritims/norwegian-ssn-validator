export class InvalidBirthDateError extends Error {
    constructor(dateOfBirth: Date) {
        super(`Date of birth is invalid [dateOfBirth:${dateOfBirth}]`)
        Object.setPrototypeOf(this, InvalidBirthDateError.prototype)

        this.dateOfBirth = dateOfBirth
    }

    dateOfBirth: Date
}
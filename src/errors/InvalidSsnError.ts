export class InvalidSsnError extends Error {
    constructor(ssn: string, reason: string) {
        super(`Ssn is invalid [ssn:${ssn}, reason:${reason}]`)
        Object.setPrototypeOf(this, InvalidSsnError.prototype)

        this.ssn = ssn
        this.reason = reason
    }

    ssn: string
    reason: string
}
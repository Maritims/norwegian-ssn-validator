import { ValidationErrorCode } from "./ValidationErrorCode"

export class ValidationResult {
    constructor(errorCode?: ValidationErrorCode) {
        this.errorCode = errorCode
    }

    errorCode: ValidationErrorCode | undefined

    isSuccess = (): boolean => this.errorCode === undefined
}
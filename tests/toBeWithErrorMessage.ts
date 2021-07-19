export {}

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeWithErrorMessage(expected: boolean, errorMessage: string): CustomMatcherResult
        }
    }
}

expect.extend({
    toBeWithErrorMessage(received: boolean, expected: boolean, errorMessage: string) {
        return {
            pass: received === expected,
            message: () => `Expected values to be equal, but they weren't. Received: ${received}. Error message: ${errorMessage}`
        }
    }
})
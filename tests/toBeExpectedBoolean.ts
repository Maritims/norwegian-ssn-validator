export {}

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeExpectedBoolean(expected: boolean, context: string): CustomMatcherResult
        }
    }
}

expect.extend({
    toBeExpectedBoolean(received: boolean, expected: boolean, context: string) {
        return {
            pass: received === expected,
            message: () => `Expected values to be equal, but they weren't. Received: ${received}. Context: ${context}`
        }
    }
})
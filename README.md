# norwegian-ssn-validator

> Component for validating Norwegian social security numbers.

## Getting started

### Installation

```shell
yarn add norwegian-ssn-validator
```

### Usage

```js
import { validateSsn } from 'norwegian-ssn-validator'

const ssn = '01015111111'
const validationResult = validateSsn(ssn)

if(validationResult.isSuccess()) {
    console.log('SSN is valid')
} else {
    console.log(`SSN is invalid: ${validationResult.errorCode}`)
}
```

## Versioning

Maintained under the [Semantic Verisoning Guidelines](https://semver.org).

## License
[ISC](https://opensource.org/licenses/ISC)
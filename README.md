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

let ssn = '01015111111'
let isValid = false

try {
    isValid = validateSsn(ssn)
} catch(error) {
    console.error(error)
}
```

## Versioning

Maintained under the [Semantic Verisoning Guidelines](https://semver.org).

## License
[ISC](https://opensource.org/licenses/ISC)
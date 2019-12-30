# @wassimbenzarti/react-components

>

[![NPM](https://img.shields.io/npm/v/@wassimbenzarti/react-components.svg)](https://www.npmjs.com/package/@wassimbenzarti/react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @wassimbenzarti/react-components
```

## Usage

### Flex

```jsx
import React, { Component } from 'react'

import {Flex} from '@wassimbenzarti/react-components'

class Example extends Component {
  render () {
    return (
      <Flex style={{height:"100vh"}}>
          <h1>Hello world</h1>
          <img alt="cat" width="100" src="https://cdn.pixabay.com/photo/2019/07/19/09/41/cat-4348355_960_720.jpg"/>
      </Flex>
    )
  }
}
```

## License

MIT © [WassimBenzarti](https://github.com/WassimBenzarti)

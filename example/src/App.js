import React, { Component } from 'react'

import {Flex} from '@wassimbenzarti/react-components'

export default class App extends Component {
  render () {
    return (
      <div >
        <Flex style={{height:"100vh"}}>
          <h1>Hello world</h1>
          <img alt="cat" width="100" src="https://cdn.pixabay.com/photo/2019/07/19/09/41/cat-4348355_960_720.jpg"/>
        </Flex>
      </div>
    )
  }
}

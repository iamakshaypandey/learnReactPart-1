// higer order function 

import React, { Component } from 'react'
// import WithCounter from './WithCounter'
import WithCounter from './WithCounter'

class ClickCounter extends Component {
  render() {
    //   const {count} = this.state
      const {count,incrementCount}=this.props
    return (
      <button onClick={incrementCount}> clicked {count} times</button>
    )
  }
}

export default WithCounter(ClickCounter,5)
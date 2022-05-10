// rendering props practice

import React, { Component } from 'react'

export class HowerCounterTwo extends Component {
  render() {
    //   const {count}=this.state
    const {count,incrementCount}=this.props
    return (
     <h2 onMouseOver={incrementCount}>Howerd {count} times</h2>
    )
  }
}

export default HowerCounterTwo
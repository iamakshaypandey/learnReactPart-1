// rendering props practice

import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
  render() {
    //   const {count}=this.state
    const {count,incrementCount}=this.props

    //   console.log(count,incrementCount);
    return (
      <button onClick={incrementCount}>click {count} times</button>
    )
  }
}

export default ClickCounterTwo
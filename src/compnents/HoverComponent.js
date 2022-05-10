// use higher order function 

import React, { Component } from 'react'
import WithCounter from './WithCounter'

export class HoverComponent extends Component {
  render() {
    //   const {count} = this.state
    const {count,incrementCount}=this.props
    return (
      <div>
          <h2 onMouseOver={incrementCount}>
            {this.props.name}
          Hover {count} Component
          </h2>
        </div>
    )
  }
}

export default WithCounter(HoverComponent,10)
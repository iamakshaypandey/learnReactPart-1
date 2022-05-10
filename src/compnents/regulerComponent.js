import React, { Component } from 'react'

export class RegulerComponent extends Component {
  render() {
    console.log('reguler component render');
    return (
        <div>
          regulerComponent  {this.props.name}
        </div>
    )
  }
}

export default RegulerComponent
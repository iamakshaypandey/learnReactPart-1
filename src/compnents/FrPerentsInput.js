import React, { Component } from 'react'
import FrInput from './FrInput'

class FrPerentsInput extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    clickHandler = () =>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
          <FrInput ref = {this.inputRef}/>
          <button onClick={this.clickHandler}>Focus input</button>
      </div>
    )
  }
}

export default FrPerentsInput
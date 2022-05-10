// we are using child component and parents component creat a input
//  box using focus() function and react.createRef()

import React, { Component } from 'react'


class input extends Component {

    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }

    focusInput(){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
          <input type= 'text' ref={this.inputRef}/>
      </div>
    )
  }
}

export default input
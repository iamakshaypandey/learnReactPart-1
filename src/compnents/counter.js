import React, { Component } from 'react'

 class CounterProp extends Component {
    constructor(props) {
        super(props)
        this.state = {
           count : 0
        }
      }
      incrementsCount = () =>{
          this.setState(prvecount=>{
              return {count : prvecount.count + 1}
          })
      }
  render() {
    // console.log(count);
    return (
      <div>
      {this.props.render(this.state.count,this.incrementsCount)}  
      </div>
    )
  }
}

export default CounterProp
import React, { Component } from 'react'

 class userGretting extends Component {
     constructor(props){
         super(props)
         this.state={tag : true}
     }
  render() {
    //   if(this.state.tag){
    //       return 'welcome akshay'
    //   }else{
    //       return 'welcome guest'
    //   }

    //  using jsx creat a veriable

    // let message
    // if(this.state.tag){
    //     return 'welcome akshay'
    // }else{
    //     return 'welcome guest'
    // }
    // return <div>{message}</div>

    // 2nd fix problem using ternary oprator

    return (
        this.state.tag ?
        <div>welcome akshay</div>:
        <div>welcome guest</div>
    )
  }
}
export default userGretting
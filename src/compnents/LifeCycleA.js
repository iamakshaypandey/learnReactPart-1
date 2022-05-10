// mounting the class components life cycle and updating methods are include

import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

 class LifeCycleA extends Component {
     constructor(props) {
       super(props)
       this.state = {
          name:'akshay'
        }
        console.log('life cycle A  constructor');
     }

     static getDerivedStateFromProps(props,state){
         console.log('life cycle A  getDerivedStateFromProps');
         return null
     }

     componentDidMount(){
         console.log('life cycle A  componentDidMount');
     }


     shouldComponentUpdate(){
        console.log('life cycle A shouldComponentUpdate its return true');
        return true

     }

     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('life cycle A  getSnapshotBeforeUpdate');
        return null
     }

     componentDidUpdate(){
        console.log('life cycle A  componentDidupdate');
     }

     changeState =()=>{
         this.setState({
             name:'web devloper'
         })
     }

  render() {
      console.log('life cycle A render');
    return (
      <div>
          LifeCycleA
          <button onClick={this.changeState}>change state</button>
        <LifeCycleB/>
      </div>
    )
  }
}
export default LifeCycleA
// mounting the class components life cycle

import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
       super(props)
       this.state = {
          name:'akshay'
        }
        console.log('life cycle B  constructor');
     }

     static getDerivedStateFromProps(props,state){
         console.log('life cycle B  getDerivedStateFromProps');
         return null
     }

     componentDidMount(){
         console.log('life cycle B componentDidMount');
     }

     shouldComponentUpdate(){
        console.log('life cycle B shouldComponentUpdate its return true');
        return true

     }

     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('life cycle B  getSnapshotBeforeUpdate');
     }

     componentDidUpdate(){
        console.log('life cycle B  componentDidupdate');
     }


  render() {
      console.log('life cycle B render');
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB
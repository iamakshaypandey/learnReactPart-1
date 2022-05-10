import React, { Component ,PureComponent } from 'react'
import PureComponent1 from './PureComponent';
import RegulerComponent from './regulerComponent';
import Memocomp from './memocomp';

class PrarentsComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name1:'akshay'
      }
    }
    componentDidMount(){
        setInterval(() => {
           this.setState({
             name1:'akshay pandey'
           })
        }, 2000);
    }
    render() {
      console.log('***********parents component render***********');

    // console.log('****',this.state.name1);
    return (   
      <div>
        Prarents components
        <Memocomp name={this.state.mamo}/>
        {/* <RegulerComponent name = {this.state.name1}></RegulerComponent> */}
        {/* <PureComponent1 name = {this.state.name1}></PureComponent1> */}
    </div>
    )
  }
}

export default PrarentsComp
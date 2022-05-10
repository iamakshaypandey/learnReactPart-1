import React, { Component } from "react";

class counter  extends Component{
    constructor(props){
        super(props)
        this.State = {
            count: 0
        }
    }
    increment(){
        this.setState({
            count : this.State.count ++
            
        },()=>console.log(this.State.count))
        // console.log(this.State.count);
    }

    // incrementfive(){
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }
    render(){
        return (
            <div>
                <div>
                Count -- {this.State.count}
                </div>
                <button onClick = {() => this.increment() }>increment</button>
            </div>
        )
    }
}

export default counter
import React, { Component } from "react";
import message from "./message";

class EventBind extends Component{

    constructor(props){
        super(props)
        this.state = {
            message: ' hello akshay pandey its bind method '
        }
        // this.clickHendler=this.clickHendler.bind(this)
    }
    // clickHendler(){
    //     this.setState({
    //     // message: 'its change the usng onclick Events bind method'
    //     message: 'its change the usng onclick Events arrow function calling method'


    //     })
    //     console.log(this);
    // }
    
    // fourth method in with using callback method direct call
    clickHendler =()=>{
        this.setState({
            message:'its using callback function without using bind and inside onclick call back'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHendler.bind(this)}> Click</button> */}
                {/* <button onClick={()=>this.clickHendler()}> Click</button> */}
                <button onClick={this.clickHendler}> Click</button>


            </div>
        )
    }
}

export default  EventBind
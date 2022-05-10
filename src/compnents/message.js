//  creat a class components and export the file inside app.js

// import  from "react";
import React , {Component} from "react";


class message extends Component{
    constructor(props){
        super(props)
        this.state={
            message: 'wel-come visitors'
        }
    }

    changeMessege(){
        this.setState({
            message: ' thank you visitors'
        })
    }
    render(){
        return (
        <div>
        {/* we use onclick event change the property state using class methods */}
        <h1>{this.state.message}</h1> 
        <button onClick={()=>this.changeMessege()}>click and change using state</button>
        </div>

         )
    }
}
export default message
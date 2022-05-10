//  creat a class components and export the file inside app.js

// import  from "react";
import React , {Component} from "react";

class Welcome extends Component{
    render(){
        return <h1>{this.props.name} aaa {this.props.hero}</h1>   
    }
}
export default Welcome
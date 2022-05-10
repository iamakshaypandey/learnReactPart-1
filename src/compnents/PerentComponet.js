import React, { Component } from "react";
import ChildComponets from "./childComponets";

class perents extends Component{

    constructor(props){
        super(props)
        this.state = {
            prents:'prents'
        }
        this.grettingPerents = this.grettingPerents.bind(this)
    }
    grettingPerents(childName){
        alert(`Hello ${this.state.prents} from ${childName}`)
    }
    render(){
        return(
            <div>
               <ChildComponets greetHandler = {this.grettingPerents}/> 
            </div>
        )
    }
}

export default perents
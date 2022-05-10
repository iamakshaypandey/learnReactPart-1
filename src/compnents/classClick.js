// class click event useing in js

import React, { Component } from "react";

class classClick extends Component{
    classClick(){
        console.log('its using class methods onclick event');
    }
    render(){
        return(
            <div>
                <button onClick={this.classClick}>
                    click Class method
                </button>
            </div>
        )
    }
}


export default classClick
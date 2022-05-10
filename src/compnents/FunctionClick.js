// how to works Event in javaScript //


import React from "react";

function  FunctionClick(){
    const clickHendler = ()=>{
        console.log('hello akshay its using function methode ');
    }
    return (
        <div>
            <button onClick={clickHendler}>
                click
            </button>
        </div>
    )
}

export default FunctionClick
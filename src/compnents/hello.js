// how to code look like using jsx and without usin jsx

// 1st stape import react

import React from "react";

// 2nd stape creat a function

const hello = ()=>{

    // jsx syntex
// return (
    // <div>
    // <h1>Hello Akshay</h1>
    // </div>
// )

///////////// without jsx 
return React.createElement('div',{id:'hello',className:'checkerr'},React.createElement('h1',null,'hello akshay pandey'))
}

export default hello
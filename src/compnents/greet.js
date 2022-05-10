// create a new file writing a component its function component 

import React from "react";

// we use a propes declere inside app.js file like function use a dcleare properties

const Greet = (propes) =>{
    // destructuring veriables
    // const Greet = ({name,hero}) =>{
    // secound way 
    const {name,hero} = propes
    // console.log(propes);
    return( 
        <div>
            <h1>hello {name} reletion {hero}</h1>
            {/* {propes.children} */}
        </div>
    )

} 
export default Greet
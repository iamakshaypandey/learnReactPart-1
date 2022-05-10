// check error boundary in react

import React from 'react'
function hero({heroName}) {
    // console.log(heroName);
    if(heroName==='joker'){
        throw Error ('not a hero')
    }   
  return (
    <div>{heroName}</div>
  )
}

export default hero
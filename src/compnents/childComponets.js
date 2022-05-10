
import React from 'react'

function childComponets(props) {
  return (
    <div>
        <button onClick={props.greetHandler('child')}>greet prents</button>
    </div>
  )
}

export default childComponets
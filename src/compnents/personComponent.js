import React from 'react'

function Person({person}) {
    console.log(person);
  return (
    <div>
        <h2>my car color is {person.color} its buy to {person.registration} and its capacity{person.capacity}</h2>
    </div>
  )
}

export default Person
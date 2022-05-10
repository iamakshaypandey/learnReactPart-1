import React from 'react'
import Person from './personComponent';

function nameList() {
    const names = ['akshay','niki','ritik','niki']
    const person = [
        {
          "color": "purple",
          "type": "minivan",
          "registration": '20march',
          "capacity": 7
        },
        {
          "color": "red",
          "type": "station wagon",
          "registration": '30march',
          "capacity": 5
        },
      ]
    const nameList = names.map((name,index)=><h2 key={index}>{name}</h2>);
    const personList  = person.map(person=> <Person key={person.type} person={person}/>)
    // console.log(personList);
  return (
    <div>
        {personList}
        {nameList}
        {/* <h1>{names[0]}</h1>
        <h1>{names[1]}</h1>
        <h1>{names[2]}</h1> */}
    </div>
  )
}

export default nameList
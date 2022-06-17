import React from 'react'
import Person from './Person';

function PersonList() {
  const persons =[
    {
      id: 1,
      name: "Lokesh",
      age: 18,
      skill: "Everything"
    },
    {
      id: 2,
      name: "Medha",
      age: 20,
      skill: "BlockChain"
    },
    {
      id: 3,
      name: "Deepak",
      age: 22,
      skill: "Java"
    }
  ]
  let personList = persons.map(person => <Person key={person.id} person={person}/>);
  return <div>{personList}</div>
}

export default PersonList
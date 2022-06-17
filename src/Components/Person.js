import React from 'react'

function Person({person: {name, age, skill}}) {
  return (
    <div><h2>{name} is {age} and skilled in {skill}</h2></div>
  )
}

export default Person
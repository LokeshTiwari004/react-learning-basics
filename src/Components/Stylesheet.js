import React from 'react'
import './mystyle.css'

function Stylesheet(props) {
  let clasName = props.primary ? 'primary' : '';

  return (
    <h2 className= {`${clasName} size-xl`}> Stylesheet </h2>
  )
}

export default Stylesheet
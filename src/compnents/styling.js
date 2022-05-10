import React from 'react'
import './myStyle.css'

function Styling(props) {
    console.log(props);
    const classname = props.Primary ? 'primary' : ''
  return (
    <div>
        <h1 className = {`${classname} fx-size` }>Stylesheets</h1>
    </div>
  )
}

export default Styling
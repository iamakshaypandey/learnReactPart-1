// portalDemo file creat a new wportal index html file below root element

import React from 'react'
import  ReactDOM  from 'react-dom'

function portalDemo() {
  return ReactDOM.createPortal(
    <h1>portal Demo</h1>,
    document.getElementById('portal-root')
  )
}

export default portalDemo
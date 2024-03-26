import React from 'react'
import propTypes from 'prop-types'
import { useState } from 'react'


                                                                //   short key  -  RFC
export default function Navbar(props) {
  const [modeText, setModeText] = useState("Enable Dark Mode")

  const toggleMode = () =>{
  if (props.mode === 'light'){
    setModeText("Enable Dark Mode")
  }
  else if (props.mode === 'dark'){
    setModeText("Enable Light Mode")
  }
}

  return (
    <div>
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.AboutItem}</a>
        </li>
      </ul>
      <div class={`form-check form-switch text-${props.mode=== 'light' ? 'dark': 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
        <label id="light" className="form-check-label" htmlFor="switchCheckDefault" onChange={toggleMode}>{modeText}</label>
      </div>
    </div>
  </div>
    </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: propTypes.string,
    AboutItem: propTypes.string
  }
  
Navbar.defaultProps = {
    title: "set title here",
    AboutItem: "About text here"
}

  

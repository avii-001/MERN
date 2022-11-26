
import React from 'react'           //rfc -> react function based component
import PropTypes from 'prop-types'      //impt
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">{props.about}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Product" className="nav-link" href="/">Product</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link" href="/">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Login" className="nav-link" href="/">Login</Link>
                </li>
                
          
              </ul>
              <div className={`"form-check form-switch text-${props.mode==='light'?'dark':'light'}" my-2`} >
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"    style={{color:props.mode==='dark'?'white':'black'}}>Dark Mode</label>
              </div>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              
            </div>
          </div>
        </nav>
  )
}
// Navbar.prototype={
//     title:PropTypes.string.isRequired,
//     aboutText:PropTypes.string.isRequired
// }

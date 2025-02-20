import React, { useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import NavDropdown from '../dropdown'
import Button from 'react-bootstrap/Button';
function Navbar() {
  const [isLogin, setIslogin] = useState(true)
  return (
    <>
      <nav className="navbar navbar-expand-lg main-navbar">
        <div style={{ width: "50px" }}>
          <Link className="navbar-brand logo" to={"/home"}>
            <img src='img/fern.png' style={{ width: "100%", height: "100%", transform: "rotate(20deg)" }} /></Link>
        </div>
        <div className="container-fluid container-navbar">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse farm_nav" id="navbarNavDropdown">
            <ul className="navbar-nav farm_gap">
              <li className="nav-item">
                <Link className="nav-link link-color" aria-current="page" to={"/home"}>Home</Link>
              </li>
              <li className="nav-item farm-info">
                <Link className="nav-link link-color" to="/">General Information</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link-color" aria-current="page" to="/chemical" >Chemical</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color" aria-current="page" to="/" >Seed</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color" aria-current="page" to="/soiltesting">Soil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color" aria-current="page" to="/" >Weather</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link link-color" to="/admin/mainpage">Production Chart</Link>
              </li>
            </ul>

          </div>
          {
            isLogin ? (
              <div style={{ overflow: 'hidden', marginRight: "30px", width: "50px" }}>
                <Link to={"/account"} ><img src='img/account.png' style={{ width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "white" }} /> </Link>
              </div>
            ) : (
              <div className='button-container'>
                <li className="nav-item active dropdown drop-registration">

                  <NavDropdown />
                </li>

              </div>
            )
          }


        </div>
      </nav>

    </>



  )
}

export default Navbar

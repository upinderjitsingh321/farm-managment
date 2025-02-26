import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import NavDropdown from '../dropdown'
import { CgProfile } from 'react-icons/cg'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { MdLogout } from 'react-icons/md'
function Navbar() {
  const [isLogin, setIslogin] = useState(true)
  const [profile, setProfile] = useState(false)
  const dropdownRef = useRef(null);
console.log(dropdownRef)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfile(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
              <div className='profile-dropdown'  ref={dropdownRef}>

                <button onClick={()=>setProfile(true)} className='profile-btn'><img className='profile-img' src='img/account.png' /></button>
                  <div className='dropdown-btn'
                  style={{display:`${profile ?"block":"none"}`}}
                  >
                    <Link to={"/account"} > <CgProfile className='me-2' />Profile</Link>
                    <Link to={"/openaccount"}> <AgricultureIcon className='me-2' />Open Fram</Link>
                    <Link> <MdLogout className='me-2 text-danger' />Logout</Link>
                  </div>
              

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

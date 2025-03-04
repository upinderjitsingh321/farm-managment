import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import NavDropdown from '../../dropdown'
import { CgProfile } from 'react-icons/cg'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { MdLogout } from 'react-icons/md'
function Navbar() {
  const [isLogin, setIslogin] = useState(true)
  const [profile, setProfile] = useState(false)
  const [crop, setCrop] = useState(false)
  const [navbar, setNavbar] = useState(true)
  const dropdownRef = useRef(null);
  const dropdownoneRef = useRef(null);

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
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownoneRef.current && !dropdownoneRef.current.contains(event.target)) {
        setCrop(false);
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
      <nav className="navbar navbar-expand-lg main-navbar" style={{ backgroundColor: `${navbar ? " #043820" : "rgb(65 88 65) "}` }}>
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
            {
              navbar ? (
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
              ) : (
                <ul className='Usernavbar'>
                  <Link className=' userlist text-white link-color' to={"/userhome"}><li className='userlist'><img className="usernav-icon  pe-1" src='img/home.png' /> Home</li></Link>
                  <Link className='userlist text-white link-color' to={"/openaccount"}><img className="usernav-icon  pe-1" src='img/dashboard.png' />Dashboard</Link>
                  <Link className='userlist text-white link-color' to={"/userfield"}><img className="usernav-icon  pe-1" src='img/field.png' />Fields</Link>

                  <div className='' ref={dropdownoneRef}>
                    <Link onClick={() => setCrop(true)} className='userlist text-white link-color '><img className="usernav-icon pe-1" src='img/crop.png' />
                      Crops</Link>

                    <div className='dropdown-btn'
                      style={{ backgroundColor: "#e6e6e6", padding: "9px", display: `${crop ? "block" : "none"}` }}
                    >
                      <Link to={"/croppage"} className='link-color-set ' > <span className='set-font'>Crop & Activities</span> </Link>
                      <Link to={"/croprotationpage"} className='link-color-set1'><span className='set-font'>Crop Rotation</span></Link>
                    </div>

                  </div>


                  <Link to={"/soilpage"} className='userlist text-white link-color'><img className="usernav-icon pe-1" src='img/soil.png' />Soil</Link>
                  <Link to={"/"} className='userlist text-white link-color'><img className="usernav-icon pe-1" src='img/cloudy.png' />Weather</Link>
                  <Link to={"/production"} className='userlist text-white link-color'><img className="usernav-icon  pe-1" src='img/incom.png' />Production cost</Link>
                </ul>
              )}



          </div>
          {
            isLogin ? (
              <div className='profile-dropdown' ref={dropdownRef}>

                <button onClick={() => setProfile(true)} className='profile-btn'><img className='profile-img' src='img/account.png' /></button>
                <div className='dropdown-btn'
                  style={{ display: `${profile ? "block" : "none"}` }}
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
          <ul className="navbar-nav farm_gap">
          <li className="nav-item ">
            <Link className="nav-link link-color" to="/admin/mainpage"> Admin</Link>
          </li>
          </ul>
        </div>
      </nav>

    </>



  )
}

export default Navbar

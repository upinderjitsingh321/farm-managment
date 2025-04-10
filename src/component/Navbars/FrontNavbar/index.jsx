import React, { useEffect, useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { MdLogout } from 'react-icons/md'
import { jwtDecode } from "jwt-decode";



function Navbar() {
  const [profile, setProfile] = useState(false)
  const [crop, setCrop] = useState(false)
  // const [navbar, setNavbar] = useState(true  )
  const navigate = useNavigate()
  const dropdownRef = useRef(null);
  const dropdownoneRef = useRef(null);
   //get token
   const token = localStorage.getItem("access_token")

   const userlogout =() =>{
 // remove token
  localStorage.removeItem("access_token")
  localStorage.removeItem("user_details")
  navigate('/home')

   }

   useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          userlogout();
        }
      } catch (error) {
        console.error("Invalid token:", error);
        userlogout();
      }
    }
  }, [token]);
  
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
      <nav className="navbar navbar-expand-lg main-navbar" style={{ backgroundColor: `${!token ? " #043820" : "rgb(65 88 65) "}` }}>
        <Link className="logo" to={"/home"}>
          <img style={{ width: "85px" }} src='http://localhost:5173/img/logo.png' /></Link>

        <div className="container-fluid container-navbar">
          <div className="collapse navbar-collapse farm_nav" id="navbarNavDropdown">
            {
              !token ? (
                <ul className="navbar-nav farm_gap">
                  <li className="">
                    <Link className="nav-link link-color" aria-current="page" to={"/home"}>Home</Link>
                  </li>
                  {/* <li className="">
                    <Link className="nav-link link-color" to="/">General Information</Link>
                  </li> */}

                  <li className="">
                    <Link className="nav-link link-color" aria-current="page" to="/chemical" >Chemical</Link>
                  </li>
                  {/* <li className="">
                    <Link className="nav-link link-color" aria-current="page" to="/" >Seed</Link>
                  </li> */}
                  <li className="">
                    <Link className="nav-link link-color" aria-current="page" to="/soiltesting">Soil</Link>
                  </li>
                  <li className="">
                    <Link className="nav-link link-color" aria-current="page" to="/weather" >Weather</Link>
                  </li>
                  {/* <li className=" ">
                    <Link className="nav-link link-color" to="/admin/mainpage">Production Chart</Link>
                  </li> */}
                  <li className=" ">
                    <Link className="nav-link link-color" to="/admin/login"> Admin</Link>
                  </li>

                 <div style={{    marginLeft: "400px"}}>
                 <li className="box-postion ">
                 <Link className="nav-link for-user px-4" to="/register">Sign Up</Link>
               </li>
               <li className=" box-postion1">
                 <Link className="nav-link for-user1 ps-5 px-4" to="/alredyaccount">Log in</Link>
               </li>
                 </div>

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
                  <Link to={"/weather"} className='userlist text-white link-color'><img className="usernav-icon pe-1" src='img/cloudy.png' />Weather</Link>
                  <Link to={"/production"} className='userlist text-white link-color'><img className="usernav-icon  pe-1" src='img/incom.png' />Production cost</Link>
                  <div className='profile-dropdown' ref={dropdownRef}>

                    <button onClick={() => setProfile(true)} className='profile-btn'><img className='profile-img' src='img/account.png' /></button>
                  
                  
                    <div className='dropdown-btn'
                      style={{ display: `${profile ? "block" : "none"}` }}>
                      <button className='drop-set'><a href='/account' className='p-0' > <CgProfile className='me-2' />Profile</a></button>
                      <button className='drop-set' ><a href='/openaccount' className='p-0'> <AgricultureIcon className='me-2' />Open Fram</a></button>
                      <button className='drop-set' onClick={()=> userlogout()} > <MdLogout className='me-2 text-danger' />Logout</button>
                    </div>
                  </div>
                </ul>
              )}



          </div>


        </div>
      </nav>

    </>



  )
}

export default Navbar

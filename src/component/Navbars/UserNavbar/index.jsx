import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
function UserNavbar() {
  return (
    <header>
        <nav>
            <ul className='Usernavbar'>
                <Link className=' userlist text-white' to={"/userhome"}><li className='userlist'><img className="usernav-icon" src='img/home.png'/> Home</li></Link>
                <Link className='userlist'><img className="usernav-icon" src='img/dashboard.png'/>Dashboard</Link>
                <Link className='userlist'><img className="usernav-icon" src='img/field.png'/>Fields</Link>
                <Link className='userlist'><img className="usernav-icon" src='img/crop.png'/>Crops</Link>
                <Link className='userlist'><img className="usernav-icon" src='img/cloudy.png'/>Weather</Link>
                <Link className='userlist'><img className="usernav-icon" src='img/incom.png'/>Production cost</Link>
            </ul>
        </nav>
    </header>
  )
}

export default UserNavbar

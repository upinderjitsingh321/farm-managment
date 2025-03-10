import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import DashboardIcon from "@mui/icons-material/Dashboard";
import GrassIcon from "@mui/icons-material/Grass";
import "./style.css"

function Sidebar() {
  return (

    <>
      <div className='d-flex flex-column'>
        <img className='adminpic' src='/img/adminlogo.png' />
        <div><Link className="navbar-brand adminlogo" to={"/"}>  Crop Admin</Link></div>
      </div>
      <ul class="nav flex-column mt-4">
        <li class="nav-item"><Link class="nav-link text-white" to={"/admin/dashboard"}> <DashboardIcon sx={{ color: "#f5227b" }} /> Dashboard</Link></li>
        <li class="nav-item"><Link class="nav-link text-white" to={"/admin/farmerlist"} >👨‍🌾 Farmers</Link></li>
        <li class="nav-item"><Link class="nav-link text-white" to={"/admin/userslist"} >👨‍🌾 Users</Link></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">🌾 Crops</a></li>
        <li class="nav-item"><Link class="nav-link text-white" to={"admin/soiltable"}><GrassIcon sx={{ color: "#cd7d61;" }} /> Soil </Link></li>
        <li class="nav-item"><Link class="nav-link text-white" to={"/admin/chemicaltable"}>🧪 Chemicals</Link></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">📦 Inventory</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">📑 Reports</a></li>
      </ul>
    </>



  )
}

export default Sidebar

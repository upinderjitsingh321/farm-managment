import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
function Sidebar() {
  return (

    <ul class="nav flex-column">
      <li class="nav-item"><Link class="nav-link text-white" to={"/admin/dashboard"}>📊 Dashboard</Link></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">🌾 Crops</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">🧪 Chemicals</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">👨‍🌾 Farmers</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">📦 Inventory</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">📑 Reports</a></li>
    </ul>




  )
}

export default Sidebar

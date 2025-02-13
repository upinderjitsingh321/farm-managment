import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
function Admin() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow">
    <div class="container-fluid">
        <Link class="navbar-brand" to={"/"}>🌾 Crop Admin</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="adminNavbar">
            <form class="d-flex ms-auto me-3">
                <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
                <button class="btn btn-light" type="submit">🔍</button>
            </form>
            <button class="btn btn-outline-light me-3 position-relative">
                🔔<span class="position-absolute top-0 start-100 translate-middle badge bg-danger"></span>
            </button>
            <Dropdown as={ButtonGroup}>
        
       
  
        <Dropdown.Toggle className='drop-btn btn-light rounded-2' split variant="success" id="dropdown-split-basic" >
        👤 Admin
        </Dropdown.Toggle>
  
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item className="dropdown-item" ><Link className='color-list' to={"/"}>Profile</Link></Dropdown.Item>
          <Dropdown.Item className="dropdown-item" ><Link className='color-list' to={"/"}>Setting</Link></Dropdown.Item>
          <hr class="dropdown-divider"/>
          <Dropdown.Item className="dropdown-item" ><Link className='color-list text-danger' to={"/"}>Logout</Link></Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
        </div>
    </div>
</nav>

{/* Sidebar & Main Content Layout  */}
<div class="container-fluid">
    <div class="row">
        {/* Sidebar */}
        <nav class="col-md-2 d-md-block bg-success sidebar py-3 text-white min-vh-100">
            <ul class="nav flex-column">
                <li class="nav-item"><a class="nav-link text-white" href="#">📊 Dashboard</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#">🌾 Crops</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#">🧪 Chemicals</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#">👨‍🌾 Farmers</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#">📦 Inventory</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#">📑 Reports</a></li>
            </ul>
        </nav>

        {/* Main Content */}
        <main class="col-md-10 py-3">
            <h2>Welcome to the Admin Dashboard</h2>
            <p>Select an option from the sidebar to manage your crop system.</p>
        </main>
    </div>
</div>

        </div>
    )
}

export default Admin

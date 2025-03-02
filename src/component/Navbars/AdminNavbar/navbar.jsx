import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
function Uppernavbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-color shadow ">
        <div class="container-fluid">
          
          <div class="collapse navbar-collapse" id="adminNavbar">
            <form class="d-flex ms-auto me-3">
              <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
              <button class="btn btn-light" type="submit">🔍</button>
            </form>
            <button class="btn btn-outline-light me-3 position-relative">
              🔔<span class="position-absolute top-0 start-100 translate-middle badge bg-danger"></span>
            </button>
            <Dropdown as={ButtonGroup}>



              <Dropdown.Toggle className='drop-btn btn-light rounded-2' split variant="success" id="dropdown-split-basic" >
                👤 <span>Admin</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item className="dropdown-item" ><CgProfile className='me-2'/><Link className='color-list' to={"/"}>Profile</Link></Dropdown.Item>
                <Dropdown.Item className="dropdown-item" ><IoSettings className='me-2'/><Link className='color-list' to={"/"}>Setting</Link></Dropdown.Item>
                <hr class="dropdown-divider" />
                <Dropdown.Item className="dropdown-item hh" ><MdLogout className='me-2 text-danger'/><Link className='color-list text-danger' to={"/"}>Logout</Link></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Uppernavbar

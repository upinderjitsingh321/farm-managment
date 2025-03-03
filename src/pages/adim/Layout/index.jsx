import React from 'react'
import Uppernavbar from '../../../component/Navbars/AdminNavbar/navbar'
import Sidebar from '../../../component/Navbars/AdminNavbar/sidebar'
import "./style.css"

function AdminLayout({ children }) {
    return (
        <div className='d-flex' >
            
            <div style={{width:"15%", height:"100%" ,position:"fixed"}}>
                <nav class=" navbar-color py-3 text-white min-vh-100">

                    <Sidebar />
                </nav>
            </div>
            <div className="w-100 layout-set">
                <header>
                    
                    <Uppernavbar />
                   
                    
                </header>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AdminLayout

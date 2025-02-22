import React from 'react'
import Uppernavbar from '../navbars/navbar'
import Sidebar from '../navbars/sidebar'

function AdminLayout({ children }) {
    return (
        <div className='d-flex'>
            
            <div style={{width:"15%"}}>
                <nav class=" bg-success sidebar py-3 text-white min-vh-100">

                    <Sidebar />
                </nav>
            </div>
            <div className="w-100">
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

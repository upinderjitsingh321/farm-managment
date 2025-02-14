import React from 'react'
import Uppernavbar from '../navbars/navbar'
import Sidebar from '../navbars/sidebar'

function AdminLayout({ children }) {
    return (
        <div className='d-flex'>
            {/* <div class="w-100">
                <div class="row">
                    <Uppernavbar />
                    <nav class="col-md-2 d-md-block bg-success sidebar py-3 text-white min-vh-100">

                        <Sidebar />
                    </nav>
                    <main class="col-md-10 py-3">
                       {children}
                    </main>
                </div>
            </div> */}
            <div style={{width:"15%"}}>
                <nav class=" bg-success sidebar py-3 text-white min-vh-100">

                    <Sidebar />
                </nav>
            </div>
            <div className='w-100'>
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

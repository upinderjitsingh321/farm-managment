import React from 'react'
import "./style.css"
function Myaccount() {
    return (
        <div>
            <div className='container-main'>
                <div className='row gx-0 account'>
                    <div className='col-md-4 col-12'>
                        <div className='left-side shadow'>
                        <div className='block-one'><h3 style={{textAlign:"center"}}>Agri Management</h3></div>

                            <ul className='account-list'>
                                <div className='toogle-list'><li>Home</li></div>
                                <div className='toogle-list'><li>Chemical</li></div>
                                <div className='toogle-list'><li>Seed</li></div>
                                <div className='toogle-list'><li>Soil</li></div>
                                <div className='toogle-list'><li>Weather</li></div>
                                <div className='toogle-list'><li>Production Chart</li></div>
                            </ul>
                            
                            
                        <ul className='account-list'>
                            
                        <div className='toogle-list-profile'><img src='img/account.png' style={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"white"}}/><li className='my-profile'>My Profile</li></div>
                        
                                <div className='toogle-list'><li>My Frams</li></div>
                                <div className='toogle-list'><li>My crops</li></div>
                              
                            </ul>
                        
                        </div>
                        
                    </div>
                    <div className='col-md-8'>
                        <div className='d-flex align-items-center'>
                           
                                <h3 className='line'>My Profile</h3>
                            
                            <div className='borderBottom'></div>
                        </div>
                        <div>
                            hihj
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Myaccount

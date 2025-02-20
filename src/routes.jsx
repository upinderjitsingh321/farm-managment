import React from 'react'
import { Routes, Route } from 'react-router-dom';
import FarmerRegistration from './pages/forms/Registration/NewRegisrtation'
import FarmerForm from './pages/forms/AddFarm/Farm'
import AddCrop from './pages/forms/AddCrop'
import DynamicPage from './pages/DynamicPage'
import SoilTesting from './pages/SoilTesting'
import ViewMore from './pages/SoilTesting/viewmore'
import ChemicalPage from './pages/chemical'
import Myaccount from './pages/MyAccount'
import EditPersonalInfo from './pages/MyAccount/Edit-info'
import Admin from './pages/adim';
import SoliListingPage from './pages/adim/Adminpages/AdminSoilListing';
import Dashboard from './pages/adim/Adminpages/dashboard';
import LoginRegister from './component/Card/registercard/loginregisterpage';
import HomePage from './pages/HomePage';
import AlreadyAccount from './pages/AleradyLogin';
import ForgotPassword from './pages/forgetpassword';

function AllRoutes() {
    return (
        <>
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<FarmerRegistration />} />
                <Route path="/addland" element={<FarmerForm />} />
                <Route path="/addcrop" element={<AddCrop />} />
                <Route path="/details/:name" element={<DynamicPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/soiltesting" element={<SoilTesting />} />
                <Route path="/seemore" element={<ViewMore />} />
                <Route path="/chemical" element={<ChemicalPage />} />
                <Route path="/account" element={<Myaccount />} />
                <Route path="/edit-personal" element={<EditPersonalInfo />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/farmerlogin" element={<LoginRegister/>} />
                <Route path="//alredyaccount" element={<AlreadyAccount/>} />
                <Route path="/admin/soil" element={<SoliListingPage />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />



            </Routes>
        </>


    )
}

export default AllRoutes

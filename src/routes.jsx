import React from 'react'
import { Routes, Route } from 'react-router-dom';
import FarmerRegistration from './pages/forms/Registration/NewRegisrtation'
import AddCrop from './pages/forms/AddCrop'
import DynamicPage from './pages/DynamicPage'
import SoilTesting from './pages/SoilTesting'
import ViewMore from './pages/SoilTesting/viewmore'
import ChemicalPage from './pages/chemical'
import Myaccount from './pages/MyAccount'
import EditPersonalInfo from './pages/MyAccount/Edit-info'
import Admin from './pages/adim';
import Dashboard from './pages/adim/Adminpages/dashboard';
import LoginRegister from './pages/loginregisterpage';
import HomePage from './pages/HomePage';
import AlreadyAccount from './pages/AleradyLogin';
import ForgotPassword from './pages/forgetpassword';
import NewUser from './pages/newuser';
import PesticideDashboard from './component/admincomponents/pesticide';
import SoilRecordsTable from './pages/adim/Adminpages/AdminSoilListing';
import UserFarm from './pages/MyAccount/OpenFram';
import FeildForm from './pages/forms/AddField';
import FarmForm from './pages/forms/AddFarm';
import UserField from './pages/UserPages/FieldPage';
import UserNavbar from './component/Navbars/UserNavbar';
import UserHome from './component/UserPages/UserHomepage';
import UserCropPage from './pages/UserPages/CropPage';
import UserCropRotationPage from './pages/UserPages/CropRotaion';
import UserProductionPage from './pages/UserPages/ProductionPage';
import UserSoilPage from './pages/UserPages/SoilPage';
import FarmerList from './pages/adim/Adminpages/FarmersTable';
import UserList from './pages/adim/Adminpages/UserTable';
import FarmerDetails from './pages/adim/Adminpages/FarmersDetails';
import AdminLogin from './pages/adim/AdminLogin';
import AdminForgotPassword from './pages/adim/AdminLogin/AdminForgotPass';

function AllRoutes() {
    return (
        <>
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<FarmerRegistration />} />
                <Route path="/addland" element={<FeildForm />} />
                <Route path="/addfarm" element={<FarmForm />} />
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
                <Route path="/alredyaccount" element={<AlreadyAccount/>} />
                <Route path="/admin/soiltable" element={<SoilRecordsTable />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/newuser" element={<NewUser />} />
                <Route path="/admin/pesticide" element={<PesticideDashboard />} />
                <Route path="/openaccount" element={<UserFarm />} />
                <Route path="/userfield" element={<UserField/>} />
                <Route path="/usernavbar" element={<UserNavbar/>} />
                <Route path="/userhome" element={<UserHome/>} />
                <Route path="/croppage" element={<UserCropPage/>}/>
                <Route path="/croprotationpage" element={<UserCropRotationPage/>} />
                <Route path="/production" element={<UserProductionPage/>} />
                <Route path="/soilpage" element={<UserSoilPage/>} />
                <Route path="/admin/farmerlist" element={<FarmerList/>} />
                <Route path="/admin/userslist" element={<UserList/>} />
                <Route path="/admin/userslist" element={<UserList/>} />
                <Route path="/admin/farmerdetails/:name" element={<FarmerDetails/>} />
                <Route path="/admin/login" element={<AdminLogin/>} />
                <Route path="/admin/Forgotpassword" element={<AdminForgotPassword/>} />



            </Routes>
        </>


    )
}

export default AllRoutes

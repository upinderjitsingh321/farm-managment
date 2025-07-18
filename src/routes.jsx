import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FarmerRegistration from "./pages/forms/Registration/NewRegisrtation";
import AddCrop from "./pages/forms/AddCrop";
import SoilTesting from "./pages/SoilTesting";
import ViewMore from "./pages/SoilTesting/viewmore";
import ChemicalPage from "./pages/chemical";
import Myaccount from "./pages/MyAccount";
import EditPersonalInfo from "./pages/MyAccount/Edit-info";
import Admin from "./pages/adim";
import Dashboard from "./pages/adim/Adminpages/dashboard";
import LoginRegister from "./pages/loginregisterpage";
import HomePage from "./pages/HomePage";
import AlreadyAccount from "./pages/AleradyLogin";
import ForgotPassword from "./pages/forgetpassword";
import NewUser from "./pages/newuser";
import PesticideDashboard from "./component/admincomponents/pesticide";
import SoilRecordsTable from "./pages/adim/Adminpages/AdminSoilListing";
import UserFarm from "./pages/MyAccount/OpenFram";
import FeildForm from "./pages/forms/AddField";
import FarmForm from "./pages/forms/AddFarm";
import UserField from "./pages/UserPages/FieldPage";
import UserNavbar from "./component/Navbars/UserNavbar";
import UserHome from "./component/UserPages/UserHomepage";
import UserCropPage from "./pages/UserPages/CropPage";
import UserCropRotationPage from "./pages/UserPages/CropRotaion";
import UserProductionPage from "./pages/UserPages/ProductionPage";
import UserSoilPage from "./pages/UserPages/SoilPage";
import FarmerList from "./pages/adim/Adminpages/FarmersTable";
import UserList from "./pages/adim/Adminpages/UserTable";
import FarmerDetails from "./pages/adim/Adminpages/FarmersDetails";
import AdminLogin from "./pages/adim/AdminLogin";
import AdminForgotPassword from "./pages/adim/AdminLogin/AdminForgotPass";
import WeatherDashboard from "./pages/Weather";
import ChemicalRecordsTable from "./pages/adim/Adminpages/chemical";
import AdminCropList from "./pages/adim/Adminpages/CropList";
import AdminProfile from "./pages/adim/AdminProfile";
import Email from "./pages/verify/Email";
import ContactUsForm from "./pages/contactus";
import ResetPassword from "./pages/forgetpassword/resetPass";
import PasswordChange from "./pages/passwordreset";
import User from "./test1";

function AllRoutes() {
  const token = localStorage.getItem("access_token");
  const user_details = localStorage.getItem("user_details");
   const getUSerDetails = JSON.parse(user_details)
  console.log(getUSerDetails?.role_id ===1 ? "here" :"wrong","sdsdsdsds")
  return (
    <>

         <Routes>
      {!token ? (
  // Public (unauthenticated) routes
  <>
  <Route path="/home" element={<HomePage />} />
  <Route path="/" element={<HomePage />} />
  <Route path="/soiltesting" element={<SoilTesting />} />
  <Route path="/seemore" element={<ViewMore />} />
  <Route path="/chemical" element={<ChemicalPage />} />
  <Route path="/register" element={<FarmerRegistration />} />
  <Route path="/farmerlogin" element={<LoginRegister />} />
  <Route path="/alredyaccount" element={<AlreadyAccount />} />
  <Route path="/forgotpassword" element={<ForgotPassword />} />
  {/* <Route path="/resetpassword" element={<ResetPassword />} /> */}
  <Route path="/changepassword/:token" element={<PasswordChange />} />
  <Route path="/weather" element={<WeatherDashboard />} />
  <Route path="/verify/:token" element={<Email />} />
  <Route path="/admin/login" element={<AdminLogin />} />
  <Route path="/contactus" element={<ContactUsForm />} />
  <Route path="/users" element={<User />} />

  </>
) : getUSerDetails?.role_id === 1 ? (
  // Admin Routes
  <>
  <Route path="/admin/userslist" element={<UserList />} />
  <Route path="/admin/farmerdetails/:id"element={<FarmerDetails />}/>
  <Route path="/admin/Forgotpassword"element={<AdminForgotPassword />}/>
  <Route path="/weather" element={<WeatherDashboard />} />
  <Route path="/admin/chemicaltable"element={<ChemicalRecordsTable />}/>
  <Route path="/admin/croplist" element={<AdminCropList />} />
  <Route path="/admin/farmerlist" element={<FarmerList />} />
  <Route path="/admin/profile" element={<AdminProfile />} />
  <Route path="/admin/dashboard" element={<Dashboard />} />
  <Route path="/admin" element={<Admin />} />
  <Route path="/admin/soiltable" element={<SoilRecordsTable />} />
  <Route path="/admin/pesticide" element={<PesticideDashboard />} />
</>
) : (
  // Regular User Routes
  <>
   <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/account" element={<Myaccount />} />
          <Route path="/edit-personal" element={<EditPersonalInfo />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/openaccount" element={<UserFarm />} />
          <Route path="/userfield" element={<UserField />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/croppage" element={<UserCropPage />} />
          <Route path="/croprotationpage" element={<UserCropRotationPage />} />
          <Route path="/production" element={<UserProductionPage />} />
          <Route path="/soilpage" element={<UserSoilPage />} />
          <Route path="/weather" element={<WeatherDashboard />} />
          <Route path="/contactus" element={<ContactUsForm />} />
          </>
)}
</Routes>
     
     
    </>
   
  );
}

export default AllRoutes;

import react, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './pages/HomePage/FooterPage';
import AllRoutes from './routes';
import AdminLayout from './pages/adim/Layout';
import Navbar from './component/Navbars/FrontNavbar';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [isAdmin, setIsAdmin] = useState(false)
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    if (location) {
      if (location?.pathname?.includes("admin")) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }
  }, [location])
 
  return (
    <div>
      {
        isAdmin ? (
          <AdminLayout>
            <AllRoutes />
          </AdminLayout>
        ) : (
          <>
            {!isAdmin && <Navbar />}
            <AllRoutes />
            {!isAdmin && <Footer />}
          </>
        )
      }
      {/* <Apps/> */}
      <ToastContainer />


    </div>



  )
}

export default App

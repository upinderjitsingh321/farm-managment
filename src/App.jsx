import react, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Footer from './pages/HomePage/FooterPage';
import AllRoutes from './routes';
import AdminLayout from './pages/adim/Layout';
import Apps from './learn/first';

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
  console.log(isAdmin, "isSAdmin")
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
<Apps/>


    </div>



  )
}

export default App

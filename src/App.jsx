import react, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Footer from './pages/HomePage/FooterPage';
import AllRoutes from './routes';

function App() {
  const [count, setCount] = useState(0)
  const [isAdmin, setIsAdmin] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (location) {
      if (location?.pathname?.includes("admin")) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }
  }, [location])
  console.log(isAdmin,"isSAdmin")
  return (
    <div>

      {!isAdmin && <Navbar />}
      <AllRoutes />
      {!isAdmin && <Footer />}

    </div>



  )
}

export default App

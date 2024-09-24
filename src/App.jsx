import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode
import { QuiSommesNous } from "./pages/QuiSommesNous";
import { Accueil } from "./pages/Acceuil";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { Simulateur } from "./pages/simulateur";
import { Otp } from './pages/Otp';
function App() {
  const token = localStorage.getItem('otpToken'); 
  const isOtpGenerated =()=>
    {
     return token ? jwtDecode(token).otp_generated : false;

    }  
    

  return (
    <>
      <Router>
        <div className="bg-[#f8f9fa] min-h-screen flex flex-col">
          <Navbar />
          <Routes> 
            <Route path="/qui" element={<QuiSommesNous />} />
            <Route path="/" element={<Accueil />} />
            <Route path="/simulateur" element={<Simulateur />} />
            <Route
              path="/otp"
              element={
                  
                isOtpGenerated() ? (
                  <Otp />
                ) : (
                  <Navigate to="/" replace /> 
                )
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

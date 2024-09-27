/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode
import { QuiSommesNous } from "./pages/QuiSommesNous";
import { Accueil } from "./pages/Acceuil";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { Simulateur } from "./pages/simulateur";
import { Otp } from './pages/Otp';
import { createContext,useState } from 'react';
export const formContext=createContext();
function App() {
  const [form, setForm] = useState('');

  const isOtpGenerated = () => {
    const token = localStorage.getItem('otpToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log('token'+decodedToken.otp_generated
      ); // Log the decoded token
      return decodedToken.otp_generated ? true : false;
    }
    return false;
  }; 
    

  return (
    <>
      <Router>

        <div className="bg-[#f8f9fa] min-h-screen flex flex-col">

          <Navbar />
          <formContext.Provider value={{form,setForm}}>

          <Routes> 
            <Route path="/qui" element={<QuiSommesNous />} />
            <Route path="/" element={<Accueil />} />
            <Route path="/simulateur" element={<Simulateur />} />
            <Route
  path="/otp"
  element={<Otp form={form} setForm={setForm}/>}
/>


          </Routes>
          </formContext.Provider>

          <Footer />
        </div>

      </Router>

    </>
  );
}

export default App;

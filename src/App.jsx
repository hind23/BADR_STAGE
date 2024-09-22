import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuiSommesNous } from "./pages/QuiSommesNous";
import { Accueil } from "./pages/Acceuil";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { Simulateur } from "./pages/simulateur";
import { Otp } from './pages/Otp';
function App() {

  return (
    <>
   <Router>
          <div className="bg-[#f8f9fa] min-h-screen flex flex-col   " >
            <Navbar/>          
        <Routes> 
        <Route path="/qui" element={<QuiSommesNous/>}/>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/simulateur" element={<Simulateur/>}/>
        <Route path="/otp" element={<Otp/>}/>
        </Routes> 
        <Footer/>
         </div>
      </Router>
    </>
  )
}

export default App

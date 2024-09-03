import { Home } from "./pages/Home"
import { Routes } from 'react-router-dom';
import { Route ,Navigate} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuiSommesNous } from "./pages/QuiSommesNous";
import { Accueil } from "./pages/Acceuil";
import { Navbar } from "./components/Navbar";
function App() {

  return (
    <>
   <Router>
          <div className=" min-h-screen my-10 flex flex-col  bg-[#f8f9fa] ">
            <Navbar/>
            < div className="mb-[50px]"> </div>
          
        <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/Qui" element={<QuiSommesNous/>}/>
        <Route path="/Accueil" element={<QuiSommesNous/>}/>
          
        </Routes> 
         </div>
      </Router>
    </>
  )
}

export default App

import { Home } from "./pages/Home"
import { Routes } from 'react-router-dom';
import { Route ,Navigate} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuiSommesNous } from "./pages/QuiSommesNous";
function App() {

  return (
    <>
   <Router>
          <div className=" min-h-screen  bg-[#f8f9fa] ">
        <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/Qui" element={<QuiSommesNous/>}/>
          
        </Routes> 
         </div>
      </Router>
    </>
  )
}

export default App

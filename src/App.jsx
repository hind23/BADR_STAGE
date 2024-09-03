import { Home } from "./pages/Home"
import { Routes } from 'react-router-dom';
import { Route ,Navigate} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
   <Router>
          <div className=" min-h-screen  bg-[#f8f9fa] ">
        <Routes> 
          <Route path="/" element={<Home/>}/>
        </Routes> 
         </div>
      </Router>
    </>
  )
}

export default App

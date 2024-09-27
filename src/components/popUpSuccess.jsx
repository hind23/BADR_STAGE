// Popup component (popup.js)
import succes from "/succes.png";
import { useNavigate } from "react-router-dom";
function PopUpSuccess({ visible }) {
const navigate=useNavigate();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center py-8 items-center">
      <div className=" relative min-h-fith-64 w-96 bg-white  rounded flex flex-col justify-center items-center">
      <button
            className="block mr-0 text-item-col  text-md bg-sidebar pr-5" 
            onClick={()=>
            {
                navigate('/')
            }
            }
          >
            x
          </button>
         <img src={succes} className=" h-[45%] w-[30%] mb-12" alt="Success" />
      <h2 className="text-[130%] text-center">Votre demande de financement a été bien reçu nous vous contacterons très bientot</h2>
   </div>
    </div>
  );
}

export default PopUpSuccess;
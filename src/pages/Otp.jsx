import { useState } from "react"
import axios from 'axios';

export const Otp=()=>
{
    const [val,setVal]=useState("");
    const handleChange=(e)=>
    { 
       setVal(e.target.value);
    }
    const handleSubmit = () => {
        axios.post('http://127.0.0.1:8000/verify-otp/', {
          otp: val, // Replace with actual OTP value
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error.response ? error.response.data : error.message);
        });
      };
      
    // useEffect(() => {
    //     axios.post('http://127.0.0.1:8000/generate-otp/', {
    //         email: 'lh_dehili@esi.dz' 
    //       })
    //     .then((response) => {
    //       console.log(response.data); 
    //     })
    //     .catch((error) => {
          
    //       console.error(error); 
    //     });
    //   }, []); 
    return(
        <div className="min-h-[50vh] flex flex-col items-center space-y-4 justify-center">
            <h1 className="text-2xl">
Nous vous avons envoyé le code OTP par email , veuillez l'introduire pour confirmer votre adresse mail !            </h1>
            <input onChange={(e)=>
                {
                    handleChange(e)
                }
            } value={val} className="sm:w-[450px] w-[80%] border-[2px] border-[#085526]/50 placeholder:text-[#085526]/50 text-[#085526] text-[15px] sm:text-[20px] outline-none p-6 "  type="text" placeholder="Entrer le code OTP"/>
            <button className="bg-[#085526] sm:w-[150px]  text-white sm:p-4 p-3" onClick={handleSubmit} > 
                Confirmer
            </button>
        </div>
    )
}
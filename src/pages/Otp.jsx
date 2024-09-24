import { useState } from "react"
import axios from 'axios';

export const Otp=()=>
{
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Check if this cookie string begins with the name we want
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

    const [val,setVal]=useState("");
    const handleChange=(e)=>
    { 
       setVal(e.target.value);
    }
    const handleSubmit = () => {
      const token = localStorage.getItem('otpToken');  // Retrieve the stored JWT
      axios.post('http://127.0.0.1:8000/verify-otp/', 
        {
          otp: val,  
          token: token  // Include JWT in request body
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true  // Ensure cookies/credentials are sent
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response ? error.response.data : error.message);
      });
    };
    
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
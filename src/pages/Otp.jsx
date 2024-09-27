import { useState } from "react"
import axios from 'axios';
import mail from "/mail.svg"
import bg from"/bg_sans_logo.svg"


export const Otp=()=>
{


 
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
        localStorage.removeItem('otpToken');
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response ? error.response.data : error.message);
      });
    };
    
    return(
    

        <div className="flex justify-center items-center font-roboto h-fit" style={{
          backgroundImage: `url(${bg})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          
        }}><div className="min-h-[50vh] flex flex-col items-center rounded-lg space-y-4 font-roboto shadow-xl justify-center bg-white md:w-[50%] w-[80%] mt-24 mx-auto p-6" >
        <div className="bg-yellow-400 p-4 rounded-full"><img src={mail} alt="mail" /></div>
        <h1 className="text-[20px] text-center">
          
        Un code de confirmation (OTP) a été envoyé à votre adresse email. 
        Veuillez le saisir ci-dessous pour valider votre adresse !</h1>
                    <input onChange={(e)=>
                        {
                            handleChange(e)
                        }
                    } value={val} className=" md:w-[60%]  w-[80%] border-[2px] border-[#085526]/50 placeholder:text-[#085526]/50 text-[rgb(8,85,38)] text-[15px] sm:text-[20px] outline-none p-3  placeholder:text-[16px] "  type="text" placeholder="Entrer le code OTP"/>
                    <button className="bg-[#085526] md:w-[130px]  text-white p-3" onClick={handleSubmit} > 
                        Confirmer
                    </button>
                </div>
                </div>
    )
    
}
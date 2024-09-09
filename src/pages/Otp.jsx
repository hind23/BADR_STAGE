import { useState } from "react"

export const Otp=()=>
{
    const [val,setVal]=useState("");
    const handleChange=(e)=>
    { 
       setVal(e.target.value);
    }
    const handleSubmit=()=>
    {
        console.log(val);
    }
    return(
        <div className="min-h-[50vh] flex flex-col items-center space-y-4 justify-center">
            <input onChange={(e)=>
                {
                    handleChange(e)
                }
            } value={val} className="sm:w-[450px] w-[80%] border-[2px] border-[#085526]/50 placeholder:text-[#085526]/50 text-[#085526] text-[15px] sm:text-[20px] outline-none p-6 sm:h-[100px]"  type="text" placeholder="Entrer le code OTP"/>
            <button className="bg-[#085526] sm:w-[150px]  text-white sm:p-4 p-3" onClick={handleSubmit} > 
                Confirmer
            </button>
        </div>
    )
}
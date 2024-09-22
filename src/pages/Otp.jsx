import { useState } from "react"
import axios from 'axios';
import mail from "/mail.svg"
import { Form } from "formik";
import badr from "/bg_badr.svg"
import bg from"/bg_sans_logo.svg"


export const Otp=()=>
{

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
  });

  const handleFormSubmit = (values) => {
    // Capture form data when the form is submitted
    setFormData({
      nom: values.Nom,
      prenom: values.Prenom,
    });
  };

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
      
 
    return(
    

        <div className="flex justify-center items-center font-roboto h-fit" style={{
          backgroundImage: `url(${bg})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          
         
        }}><div className="min-h-[50vh] flex flex-col items-center rounded-lg space-y-4 font-roboto shadow-xl justify-center bg-white w-3/5 mt-24 mx-auto p-6" >
        <div className="bg-yellow-400 p-4 rounded-full"><img src={mail} alt="mail" /></div>
        <h1 className="text-[20px] text-center">
          
        Un code de confirmation (OTP) a été envoyé à votre adresse email. 
        Veuillez le saisir ci-dessous pour valider votre adresse !</h1>
                    <input onChange={(e)=>
                        {
                            handleChange(e)
                        }
                    } value={val} className="sm:w-[450px] w-[80%] border-[2px] border-[#085526]/50 placeholder:text-[#085526]/50 text-[#085526] text-[15px] sm:text-[20px] outline-none p-6 placeholder:text-[16px] "  type="text" placeholder="Entrer le code OTP"/>
                    <button className="bg-[#085526] sm:w-[150px]  text-white sm:p-4 p-3" onClick={handleSubmit} > 
                        Confirmer
                    </button>
                </div>
                </div>
    )
    
}
import { useState } from "react"
import axios from 'axios';
import mail from "/mail.svg"
import bg from"/bg_sans_logo.svg"
import { useEffect } from "react";
import {formContext} from "../App"
import { useContext } from "react";
import PopUpSuccess from "../components/popUpSuccess";
import Wait from "../components/wait";

export const Otp=()=>
{
  const onClose=()=>
  {
    setVisibl(true);
  }
  const [visible,setVisible]=useState(false);
  const {form}=useContext(formContext);

const [isResend,setResend]=useState(false);
  const [timeLeft, setTimeLeft] = useState(1 ); 
  useEffect(() => {
    if (timeLeft === 0) {
      setResend(true);
      return};
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);


    return () => clearInterval(intervalId);
  }, [timeLeft]);
  const [visibleWait,setVisibleWait]=useState(false);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  const savetoDb=async()=>
  {
 
    axios.post('http://127.0.0.1:8000/generate-otp/', { email: form.email })
    .then(response => {
      console.log(response);
      setTimeLeft(10*60) ;
      localStorage.setItem('Token', response.data.token);
      setVisibleWait(false);
    })
    .catch(error => {
      setVisibleWait(false);

      console.error(error);
    });
    setVisibleWait(true);
  }
 const resend=()=>
 {
  isResend ? 
savetoDb()
  : '';
 }
    const [val,setVal]=useState("");
    const handleChange=(e)=>
    { 
       setVal(e.target.value);
    }
    const handleSubmit = () => {
      const token = localStorage.getItem('Token');  
      axios.post('http://127.0.0.1:8000/verify-otp/', 
        {
          otp: val,  
          token: token  
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true 
        }
      )
      .then((response) => {
        localStorage.removeItem('otpToken');
        setVisibleWait(false);
        console.log(response.status);
        if(response.status ===200)
          {
            setVisible(true);
          }
        
              
      })
      .catch((error) => {
        if(error.response.status ===400)
          {
            alert("Le code que vous avez saisi est incorrect !")
          }
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
          
        }}>
          {visible && <PopUpSuccess visible={visible} onClose={onClose}/>}
          {  visibleWait &&   <Wait/>}
          <div>
    </div>
          
          <div className="min-h-[50vh] flex flex-col items-center rounded-lg space-y-4 font-roboto shadow-xl justify-center bg-white md:w-[50%] w-[80%] mt-24 mx-auto p-6" >
            
        <div className="bg-yellow-400 p-4 rounded-full"><img src={mail} alt="mail" /></div>
       

        <h1 className="text-[20px] text-center">
        
        Un code de confirmation (OTP) a été envoyé à votre adresse email. 
        Veuillez le saisir ci-dessous pour valider votre adresse !</h1>
                    <input onChange={(e)=>
                        {
                            handleChange(e)
                        }
                    } value={val} className=" md:w-[60%]  w-[80%] border-[2px] border-[#085526]/50 placeholder:text-[#085526]/50 text-[rgb(8,85,38)] text-[15px] sm:text-[20px] outline-none p-3  placeholder:text-[16px] "  type="text" placeholder="Entrer le code OTP"/>
                    <div className="md:w-[60%]  w-[80%] flex justify-between flex-col items-center sm:flex-row">

                    <h1 > <span className="text-black/50">Code valid pendant :
                    </span> {formatTime()}</h1> 
                    
                      <h1 onClick={resend} className={`underline  cursor-pointer ${isResend ? `text-black` : `text-black/50`}`} > Re-envoyer</h1>           </div>

                    <button className="bg-[#085526] md:w-[130px]  text-white p-3" onClick={handleSubmit} > 
                        Confirmer
                    </button>

                </div>
                </div>
    )
    
}
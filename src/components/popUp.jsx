/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import close from "/close-square.svg";
import { useNavigate } from "react-router-dom";
import download from '/download.svg';
import Wait from "./wait";
import jsPDF from "jspdf";
import { useRef } from "react";
import html2canvas from "html2canvas";
import axios from "axios";

function Popup({ visible, onClose ,values}) {

  const navigate=useNavigate();
  const pdfRef=useRef();
  const saveToDB = () => {
    axios.post('http://127.0.0.1:8000/generate-otp/', { email: values.email })
      .then(response => {
        console.log(response);
        localStorage.setItem('Token', response.data.token);
        console.log('OTP Access Granted:', sessionStorage.getItem('otpAccessGranted')); // Check sessionStorage value
        navigate('/otp');
      })
      .catch(error => {
        console.error(error);
      });
    setVisibleWait(true);
  };
  
  const [visibleWait,setVisibleWait]=useState(false);
  const [isVisible, setIsVisible] = useState(visible);
  const [isAnimating, setIsAnimating] = useState(false);

  // If the popup should not be visible, don't render it
  if (!isVisible && !isAnimating) return null;

  // Function to handle the "Annuler" click with animation
  const handleCancel = () => {
    setIsAnimating(true);  // Start the animation
    setTimeout(() => {
      setIsVisible(false); // After animation, fully hide the popup
      setIsAnimating(false); // Reset the animation state
      onClose();  // Call the parent's onClose function
    }, 300);  // The duration should match your CSS animation time
  };

const downloadPdf=()=>{
    const input=pdfRef.current;
    html2canvas(input).then((canvas)=>
    {
        const imgData=canvas.toDataURL('image/png');
        const pdf=new jsPDF('p','mm','a4',true);
        const pdfWidth=pdf.internal.pageSize.getWidth();
        const pdfHeight=pdf.internal.pageSize.getHeight();
        const imgWidth=canvas.width ;
        const imgHeigt=canvas.height;
        const ratio=Math.min(pdfWidth/imgWidth,pdfHeight/imgHeigt);
        const imgX=(pdfWidth - imgWidth*ratio)/2;
        const imgY=30;
        pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeigt*ratio);
        pdf.save("finance.pdf")
    })
} 

  return (
    <div className={`fixed z-[50] inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
{  visibleWait &&   <Wait/>}
      <div
        className={`w-[70%] lg:w-[55%] px-4 relative min-h-[350px] space-y-5 bg-white rounded flex flex-col justify-center items-start transform transition-transform duration-300 ${isAnimating ? "translate-y-[200%]" : "translate-y-0"}`}
      >


<button className=" absolute text-item-col text-3xl font-bold top-4 left-4 text-md text-[#085526]"
          onClick={downloadPdf}
        >
          <img className="w-[30px]" src={download} alt="Close button" />
        </button>

        <button
          className="place-self-end absolute text-item-col text-3xl font-bold top-0 right-4 text-md text-[#085526]"
          onClick={handleCancel}
        >
          <img className="w-[30px]" src={close} alt="Close button" />
        </button>
        <div ref={pdfRef} className="flex-col py-4 space-y-4">
          <h2 className="md:text-[20px] sm:text-[17px] font-bold text-[#085526] ">
            Mage de bonne fin (Hamish el jiddia):
          </h2>
          <h2 className="md:text-[20px] sm:text-[17px] font-bold text-[#085526] ">
            Montant du financement :
          </h2>
          <h2 className="md:text-[20px] sm:text-[17px] font-bold text-[#085526] ">
            Durée:
          </h2>
          <h2 className="md:text-[20px] sm:text-[17px] font-bold text-[#085526] ">
            Marge totale:
          </h2>
          <h2 className="md:text-[20px] sm:text-[17px] font-bold text-[#085526] ">
            Montant échéance TTC:
          </h2>
        </div>
        <div className="space-x-4 flex flex-row">
          <button onClick={saveToDB} className="bg-[#085526] text-white font-bold px-[20px] py-[8px] text-[14px] shadow-md">
            Confirmer
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="text-black px-[20px] py-[8px] text-[14px] bg-white/90 shadow-md"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;

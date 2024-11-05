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
import { 
  calculateJiddia, 
  calculateFinancingAmount,
  calculateMaxFinancingAmount
} from '../formules.js';

const formatResult = (value) => {
  if (typeof value !== "number") {
    console.error("Le paramètre doit être un nombre.");
    return null;
  }
  return value.toFixed(2); // 2 représente le nombre de chiffres après la virgule
};





function Popup({ visible, onClose, values, results, yes }) {
  const navigate = useNavigate();
  const pdfRef = useRef();
  const [visibleWait, setVisibleWait] = useState(false);
  const [isVisible, setIsVisible] = useState(visible);
  const [isAnimating, setIsAnimating] = useState(false);

   // Créer des références pour chaque champ requis
   const montantRef = useRef(null);
   const dureeRef = useRef(null);
   const emailRef = useRef(null); // Si c'est un champ requis
 
   // Fonction de validation
   const validateFields = () => {
     if (!values.montant) {
       montantRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
       alert("Veuillez remplir le montant");
       return false;
     }
     
     if (!values.duree) {
       dureeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
       alert("Veuillez remplir la durée");
       return false;
     }
     
     if (!values.email) {
       emailRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
       alert("Veuillez remplir l'email");
       return false;
     }
 
     return true;
   };
 

  const saveToDB = () => {
    if (!validateFields()) return;  // Ne pas procéder si la validation échoue
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

  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("finance.pdf");
    });
  };

  const renderContent = () => {
    switch (true) {
      case results.age <= 18:
        return (
          <div className="text-center w-full py-10">
            <h2 className="md:text-[20px] sm:text-[17px] text-black">
              Vous ne pouvez pas demander un crédit car vous avez <span className="font-bold text-red-500">moins de 18 ans</span>. <br />
              Veuillez consulter les conditions de votre banque pour en savoir plus sur les critères d'éligibilité au crédit. <br />
              Merci !
            </h2>
            <button type="button" onClick={handleCancel} className="text-white px-[30px] py-[8px] text-[20px] bg-[#085526] shadow-md mt-9 ml-96">
              Ok
            </button>
          </div>
        );
      case results.age >= 70:
        return (
          <div className="text-center w-full py-10">
            <h2 className="md:text-[20px] sm:text-[17px] text-black">
              Nous ne pouvons pas vous accorder de crédit car vous avez <span className="font-bold text-red-500">70 ans ou plus</span>. <br />
              Veuillez consulter les conditions de votre banque pour plus d'informations. <br />
              Merci !
            </h2>
            <button type="button" onClick={handleCancel} className="text-white px-[30px] py-[8px] text-[20px] bg-[#085526] shadow-md mt-9 ml-96">
              Ok
            </button>
          </div>
        );
      case Number(results.age * 12)+ Number(results.duree) >= 840:
        return (
          <div className="text-center w-full py-10">
            <h2 className="md:text-[20px] sm:text-[17px] text-black">
              Nous ne pouvons pas vous accorder de crédit car vous aurez <span className="font-bold text-red-500">70 ans ou plus</span> avant de terminer le crédit. <br />
              Veuillez consulter les conditions de votre banque pour plus d'informations. <br />
              Merci !
            </h2>
            <button type="button" onClick={handleCancel} className="text-white px-[30px] py-[8px] text-[20px] bg-[#085526] shadow-md mt-9 ml-96">
              Ok
            </button>
          </div>
        );
      case results.type === "Produit 1: véhicules particuliers de tourisme" && results.duree > 60:
        return (
          <div className="text-center w-full py-10">
            <h2 className="md:text-[20px] sm:text-[17px] text-black">
              Nous ne pouvons pas vous accorder de crédit car la durée maximum associée à ce produit <span className="font-bold">(véhicules particuliers de tourisme)</span> est de <span className="font-bold text-red-500">60 mois seulement</span>. <br />
              Veuillez consulter les conditions de votre banque pour plus d'informations. <br />
              Merci !
            </h2>
            <button type="button" onClick={handleCancel} className="text-white px-[30px] py-[8px] text-[20px] bg-[#085526] shadow-md mt-9 ml-96">
              Ok
            </button>
          </div>
        );
        case results.type === "Produit 2: cycles et tricycles à moteur" && results.duree > 60:
          return (
            <div className="text-center w-full py-10">
              <h2 className="md:text-[20px] sm:text-[17px] text-black">
                Nous ne pouvons pas vous accorder de crédit car la durée maximum associée à ce produit  <span className="font-bold">(cycles et tricycles à moteur) </span> est de <span className="font-bold text-red-500">60 mois seulement</span>. <br />
                Veuillez consulter les conditions de votre banque pour plus d'informations. <br />
                Merci !
              </h2>
              <button type="button" onClick={handleCancel} className="text-white px-[30px] py-[8px] text-[20px] bg-[#085526] shadow-md mt-9 ml-96">
                Ok
              </button>
            </div>
          );
          case results.type === "Produit 3: informatique , téléphonie , electroménager , téléviseurs , meubles , accessoires en bois , tissues d'ameublement" && results.duree > 36:
            return (
              <div className="text-center w-full py-10">
                <h2 className="md:text-[20px] sm:text-[17px] text-black">
                  Nous ne pouvons pas vous accorder de crédit car la durée maximum associée à ce produit <span className="font-bold">(informatique , téléphonie , electroménager , téléviseurs , meubles , accessoires en bois , tissues d'ameublement)</span> est de <span className="font-bold text-red-500">36 mois seulement</span>. <br />
                  Veuillez consulter les conditions de votre banque pour plus d'informations. <br />
                  Merci !
                </h2>
                <button type="button" onClick={handleCancel} className="text-white px-[30px] py-[8px] text-[20px] bg-[#085526] shadow-md mt-9 ml-96">
                  Ok
                </button>
              </div>
            );
      default:
        return (
          <>
            <button className="absolute text-item-col text-3xl font-bold top-4 left-4 text-md text-teal-600" onClick={downloadPdf}>
              <img className="w-[30px]" src={download} alt="Download button" />
            </button>

            <button className="place-self-end absolute text-item-col text-3xl font-bold top-0 right-4 text-md text-teal-600" onClick={handleCancel}>
              <img className="w-[30px]" src={close} alt="Close button" />
            </button>
            <div ref={pdfRef} className="flex-col px-4 py-4 space-y-4">
              
                <h2 className="md:text-[20px] sm:text-[17px] font-bold">
                  <span className="text-teal-600">Mage de bonne fin (Hamish el jiddia):</span> <span className="ml-2 text-teal-800">
    {  yes 
    ? calculateJiddia(results.credit, calculateFinancingAmount(calculateMaxFinancingAmount(results.duree, results.salaire),results.credit,results.jiddia),   results.jiddia) - results.jiddia
    : calculateJiddia(results.credit, calculateFinancingAmount(calculateMaxFinancingAmount(results.duree, results.salaire),results.credit,results.jiddia ),    results.jiddia)}DA
  </span>
                </h2>
            
              <h2 className="md:text-[20px] sm:text-[17px] font-bold text-teal-600">
                <span className="text-teal-600">Montant du financement :</span> <span className="ml-2 text-teal-800">{calculateFinancingAmount(calculateMaxFinancingAmount(results.duree,results.salaire),results.credit,results.jiddia)+results.jiddia}DA</span>


                
              </h2>
              <h2 className="md:text-[20px] text-teal-600 sm:text-[17px] font-bold">
                <span className="text-teal-600">Durée:</span>
                <span className="ml-2 text-teal-800">{results.duree ? results.duree : "30"} mois</span>
              </h2>
              <h2 className="md:text-[20px] sm:text-[17px] font-bold text-teal-600">
                <span className="text-teal-600">Marge totale:</span>
                <span className="ml-2 text-teal-800">{results.marge ? results.marge : 'N/A'}DA</span>

              </h2>
              <h2 className="md:text-[20px] sm:text-[17px] font-bold text-teal-600">
              <span className="text-teal-600">Montant échéance TTC: </span>
              <span className="ml-2 text-teal-800">{results.TTC }DA</span>
              </h2>
            </div>
            <div className="space-x-4 flex flex-row">
              <button onClick={saveToDB} className="bg-[#085526] text-white font-bold px-[20px] py-[8px] text-[14px] shadow-md">
                Confirmer
              </button>
              <button type="button" onClick={handleCancel} className="text-black px-[20px] py-[8px] text-[14px] bg-white/90 shadow-md">
                Annuler
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div className={`fixed z-[50] inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
      {visibleWait && <Wait />}
      <div className={`w-[70%] lg:w-[55%] px-4 relative min-h-[350px] space-y-5 bg-teal-50 rounded flex flex-col justify-center items-start transform transition-transform duration-300 ${isAnimating ? "translate-y-[200%]" : "translate-y-0"}`}>
        {renderContent()}
      </div>
    </div>
  );
}

export default Popup;

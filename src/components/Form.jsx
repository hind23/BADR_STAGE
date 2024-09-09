import { basicschema } from "../schemas/index";
import { useFormik } from "formik";
import { useState } from "react";
import { useRef } from "react";
export const Form = () => {
  const refYes = useRef();
  const refNo = useRef();

  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      Nom: "",
      Prenom: "",
      num: "",
      salaire: "",
      SalaireCod:""
    },
    validationSchema: basicschema,
    onSubmit: (values) => {
      console.log('Form values:', values);
      // Handle form submission logic
    },
  });

  const [YesCodebiteur, setYesCodebiteur] = useState(false);

  const [YesBadr, setYesBadr] = useState(false);


  const [isMensuel, setisMensuel] = useState(true);
  const [isTrimestriel, setisTrimestriel] = useState(false);
  const [isAnnuel, setisAnnuel] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCreditType, setSelectedCreditType] = useState("");

  const creditTypes = ["Crédit Immobilier", "Crédit Automobile", "Crédit Personnel"];



  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCreditTypeSelect = (type) => {
    setSelectedCreditType(type);
    formik.setFieldValue("creditType", type); 
    setShowDropdown(false); 
  };


  const handleRadioChange = (e) => {
    const value = e.target.value === "yes";
    setYesCodebiteur(value);
  };

  const handleRadioChangeBadr = (e) => {
    const value = e.target.value === "yes";
    setYesBadr(value);
  };

  const handlePaymentFrequencyChange = (e) => {
    const { value } = e.target;

    // Mettre à jour les états en fonction de l'option sélectionnée
    if (value === "mensuel") {
      setisMensuel(true);
      setisTrimestriel(false);
      setisAnnuel(false);
    } else if (value === "trimestriel") {
      setisMensuel(false);
      setisTrimestriel(true);
      setisAnnuel(false);
    } else if (value === "annuel") {
      setisMensuel(false);
      setisTrimestriel(false);
      setisAnnuel(true);
    }
  };

  return (
    <div className="bg-[#f8f9fa] font-roboto">
      <h1 className="text-center underline text-[25px] text-[#085526] font-bold mb-5">
        Simulateur du financement islamique
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className="flex w-[90vw] items-center mx-auto flex-col space-y-4 mb-10"
      >
        <div className="flex flex-col space-y-1">
          <div className="flex flex-col space-y-1">
            <label className="text-[#202121]/80 text-[14px]" htmlFor="Nom">
              Nom :
            </label>
            <input
              className="border border-[#085526]/50 text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder-[#085526]/50 placeholder:text-[12px] text-[16px] rounded-[2px] focus:outline-none p-3"
              id="Nom"
              name="Nom"
              type="text"
              value={formik.values.Nom}
              onChange={formik.handleChange}
              placeholder="Veuillez introduire votre nom"
            />
            {formik.errors.Nom && formik.touched.Nom && (
              <div className="text-red-500 text-[12px]">
                {formik.errors.Nom}
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-[#202121]/80 text-[14px]" htmlFor="Prénom">
              Prénom :
            </label>
            <input
              className="border border-[#085526]/50 placeholder-[#085526]/50 text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px] rounded-[2px] focus:outline-none p-3"
              id="Prenom"
              name="Prenom"
              type="text"
              value={formik.values.Prenom}
              onChange={formik.handleChange}
              placeholder="Veuillez introduire votre prénom"
            />
            {formik.errors.Prenom && formik.touched.Prenom && (
              <div className="text-red-500 text-[12px]">
                {formik.errors.Prenom}
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-[#202121]/80 text-[14px]" htmlFor="num">
              Numéro de téléphone :
            </label>
            <input
              className="border border-[#085526]/50 placeholder-[#085526]/50 text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px] rounded-[2px] focus:outline-none p-3"
              id="num"
              name="num"
              type="num"
              value={formik.values.num}
              onChange={formik.handleChange}
              placeholder="Veuillez introduire votre numero de telephone"
            />
            {formik.errors.num && formik.touched.num && (
              <div className="text-red-500 text-[12px]">{formik.errors.num}</div>
            )}
          </div>

          <label className="text-[#202121]/80 text-left text-[14px]" htmlFor="email">
            Email :
          </label>
          <input
            className="border border-[#085526]/50 placeholder-[#085526]/50 text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px] rounded-[2px] focus:outline-none p-3"
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Veuillez introduire votre email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-500 text-[12px]">{formik.errors.email}</div>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-[#202121]/80 text-[14px]" htmlFor="Salaire">
            Revenu en DA:
          </label>
          <input
            className="border border-[#085526]/50 placeholder-[#085526]/50 text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px] rounded-[2px] focus:outline-none p-3"
            id="salaire"
            name="salaire"
            type="text"
            value={formik.values.salaire}
            onChange={formik.handleChange}
            placeholder="Veuillez introduire votre salaire"
          />
          {formik.errors.salaire && formik.touched.salaire && (
            <div className="text-red-500 text-[12px]">{formik.errors.salaire}</div>
          )}
        </div>

        <div className="flex flex-col space-y-4 items-center ">
          <label className="text-[#202121]/80 text-left text-[14px] font-bold">
          Personnel de la BADR ?
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center text-[#202121]/80 text-[14px]">
              <input 
                type="radio"
                name="Badr"
                value="yes"
                checked={YesBadr === true}
                onChange={handleRadioChangeBadr}
                className="mr-2"
              />
              Oui
            </label>

            <label className="flex items-center text-[#202121]/80 text-[14px]">
              <input
                type="radio"
                name="Badr"
                value="no"
                checked={YesBadr === false}
                onChange={handleRadioChangeBadr}
                className="mr-2"
              />
              Non
            </label>
          </div>
          </div>

        <div className="flex flex-col space-y-4 items-center ">
          <label className="text-[#202121]/80 text-left text-[14px] font-semibold">
          Codebiteur ?
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center text-[#202121]/80 text-[14px]">
              <input 
                type="radio"
                name="codebiteur"
                value="yes"
                checked={YesCodebiteur === true}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Oui
            </label>

            <label className="flex items-center text-[#202121]/80 text-[14px]">
              <input
                type="radio"
                name="codebiteur"
                value="no"
                checked={YesCodebiteur === false}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Non
            </label>
          </div>
         
         
        </div>
        {YesCodebiteur && (
          <div className="flex flex-col space-y-1 mt-4">
         <label className="text-[#202121]/80 text-[14px]" htmlFor="SalaireCod">
           Revenu du codebiteur en DA:
            </label>
            <input
              className="border border-[#085526]/50 placeholder-[#085526]/50 text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px] rounded-[2px] focus:outline-none p-3"
              id="SalaireCod"
              name="SalaireCod"
              type="text"
              value={formik.values.SalaireCod}
              onChange={formik.handleChange}
              placeholder="Veuillez introduire le salaire du codebiteur"
            />
            {formik.errors.SalaireCod && formik.touched.SalaireCod && (
              <div className="text-red-500 text-[12px]">
                {formik.errors.SalaireCod}
              </div>
            )}
          </div>
        )}


<div className="flex flex-col items-center space-y-4">
          <label className="text-[#202121]/80 text-left text-[14px] font-bold">
          frequence de paiement :
          </label>
          <div className="flex flex-row justify-end space-x-4">
            <label className="flex items-center text-[#202121]/80 text-[14px]">
              <input 
                type="radio"
                name="mensuel"
                value="mensuel"
                checked={isMensuel === true}
                onChange={handlePaymentFrequencyChange}
                className="mr-2"
              />
              mensuel
            </label>

            <label className="flex items-center text-[#202121]/80 text-[14px]">
              <input
                type="radio"
                name="trimestriel"
                value="trimestriel"
                checked={isTrimestriel === true}
                onChange={handlePaymentFrequencyChange}
                className="mr-2"
              />
              Trimestriel
            </label>
            <label className="flex items-center text-[#202121]/80 text-[14px]">
              <input
                type="radio"
                name="annuel"
                value="annuel"
                checked={isAnnuel === true}
                onChange={handlePaymentFrequencyChange}
                className="mr-2"
              />
              Annuel
            </label>
          </div>
         
         
        </div>
    
        <div className="mt-6 flex flex-col space-y-2">
          <label className="text-[#202121]/80 text-[14px] font-semibold">Type de Crédit :</label>
          <button
            type="button"
            className="border border-[#085526]/50 text-[#202121]/80 p-3 rounded-[2px] bg-white shadow-sm flex justify-between [300px] w-[200px] lg:w-[400px] items-center"
            onClick={toggleDropdown}
          >
            {selectedCreditType ? selectedCreditType : "Sélectionner un type de crédit"}
            <span className="ml-2">{showDropdown ? "▲" : "▼"}</span>
          </button>

          {showDropdown && (
            <div className="border border-[#085526]/50 bg-white shadow-lg rounded-[2px] mt-2 w-full">
              {creditTypes.map((type, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCreditTypeSelect(type)}
                >
                  {type}
                </div>
              ))}
            </div>
          )}

          {/* Display validation error */}
          {formik.errors.creditType && formik.touched.creditType && (
            <div className="text-red-500 text-[12px]">
              {formik.errors.creditType}
            </div>
          )}
        </div>
     


     <div className="space-x-8 ">
        <button type="submit" className="bg-[#085526] text-white px-[60px] py-[8px] shadow-md">
          Calculer
        </button>
        <button type="submit" className="bg-white text-black px-[60px] py-[8px] shadow-md">
          Annuler
        </button>
        </div>
      </form>
    </div>
  );
};

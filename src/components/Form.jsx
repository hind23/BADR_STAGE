/* eslint-disable no-unused-vars */
import { basicschema } from "../schemas/index";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { SliderComponent } from "./slider";
import badr from "/bg_badr.svg"
import Popup from "./popUp";
import {formContext} from "../App"
import { useContext,useEffect } from "react";
import { 
  calculateProfit, 
  calculateTotalMargin, 
  calculateFinancingAmount, 
  calculateMonthlyTTC, 
} from '../formules.js';



export const Form = () => {
const {form, setForm}=useContext(formContext)
const handleTypeChange = (value) => {
  formik.setFieldValue('type', value); // Mettez à jour le type de credit dans Formik
};

const handleSliderChange = (value) => {
  formik.setFieldValue('duree', value); // Mettez à jour la valeur de la durée dans Formik
};
const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      Nom: "",
      Prenom: "",
      num: "",
      salaire: "",
      SalaireCod:"",
      Agecod:"",
      credit:"",
      duree:"",
      type:"",
      jiddia:"",
      client:""
    },
    validationSchema: basicschema,
    onSubmit: (values) => {
      setForm(values);
      setVisible(true);
      console.log(values);
    },
  });
  

  const [YesCodebiteur, setYesCodebiteur] = useState(false);
  const [isBadr, setisBadr] = useState(true);
  const [isIndiv, setisIndiv] = useState(false);
  const [isEntreprise, setisEntreprise] = useState(false);

  const [isMensuel, setisMensuel] = useState(true);
  const [isTrimestriel, setisTrimestriel] = useState(false);
  const [isAnnuel, setisAnnuel] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCreditType, setSelectedCreditType] = useState("");







  const creditTypes = ["Produit 1: véhicules particuliers de tourisme", "Produit 2: cycles et tricycles à moteur", "Produit 3: informatique , téléphonie , electroménager , téléviseurs , meubles , accessoires en bois , tissues d'ameublement"];



  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCreditTypeSelect = (type) => {
    setSelectedCreditType(type);
    formik.setFieldValue("type", type); 
    setShowDropdown(false); 
  };


  const handleRadioChange = (e) => {
    const value = e.target.value === "yes";
    setYesCodebiteur(value);
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

  const handleTypeClientChange = (e) => {
    const { value } = e.target;
    formik.setFieldValue("client", value);
    setisBadr(value === "Personnel de la BADR");
    setisIndiv(value === "Individu");
    setisEntreprise(value === "Entreprise conventionnée");
  };
  const [visible,setVisible]=useState(false)

const handeClose=()=>
{
  setVisible(visible?false:true)
}
let res={
  jiddia:formik.values.jiddia,
  credit:formik.values.credit,
  montant:calculateFinancingAmount(formik.values.duree,formik.values.salaire),
  duree:formik.values.duree,
  age:formik.values.age,
  type:formik.values.type,
  salaire:formik.values.salaire,
  marge:calculateTotalMargin(calculateProfit(formik.values.credit,formik.values.type,formik.values.client)),
  TTC:calculateMonthlyTTC(calculateTotalMargin(calculateProfit(formik.values.credit,formik.values.type,formik.values.client)),calculateFinancingAmount(formik.values.credit,formik.values.jiddia),formik.values.duree)
}
  const [YesJiddia, setYesJiddia] = useState(false);
  const handleCheckboxChange = (e) => {
    setYesJiddia(e.target.checked);
  };



  return (
    <div className="font-roboto h-fit"  style={{
      backgroundImage: `url(${badr})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }} >
      
      <h1 className="text-center underline text-[25px] text-[#085526] font-bold mb-5 mt-20">
        Simulateur du financement islamique
      </h1>
 { visible &&  <Popup visible={visible} onClose={handeClose}  values={formik.values} yes={YesJiddia} results={res}/>}
      <form onSubmit={formik.handleSubmit} className="flex w-[90vw] items-center mx-auto flex-col space-y-4 mb-10 font-roboto">
        <div className="flex flex-col space-y-1">
          <div className="flex flex-col space-y-1">
            <label className="text-[#202121]/80 text-[14px]" htmlFor="Nom">Nom :</label>
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
              <div className="text-red-500 text-[12px]">{formik.errors.Nom}</div>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-[#202121]/80 text-[14px]" htmlFor="Prénom">Prénom :</label>
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
              <div className="text-red-500 text-[12px]">{formik.errors.Prenom}</div>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-[#202121]/80 text-[14px]" htmlFor="age">
              Age :
            </label>
            <input
              className="border border-[#085526]/50 placeholder-[#085526]/50 text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px] rounded-[2px] focus:outline-none p-3"
              id="age"
              name="age"
              type="text"
              value={formik.values.age}
              onChange={formik.handleChange}
              placeholder="Veuillez introduire votre age"
            />
            {formik.errors.age && formik.touched.age && (
              <div className="text-red-500 text-[12px]">
                {formik.errors.age}
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

        <div className="flex flex-col space-y-4 items-center">
          <label className="text-[#202121]/80 text-left text-[14px] font-bold">
            Vous êtes :
          </label>
          <div className="flex items-center space-x-4">
            {["Personnel de la BADR", "Entreprise conventionnée", "Individu"].map(clientType => (
              <label key={clientType} className="flex items-center text-[#202121]/80 text-[14px]">
                <input 
                  type="radio"
                  name="client"
                  value={clientType}
                  checked={formik.values.client === clientType}
                  onChange={handleTypeClientChange}
                  className="mr-2"
                />
                {clientType}
              </label>
            ))}
          </div>
          {formik.errors.client && formik.touched.client && (
            <div className="text-red-500 text-[12px]">{formik.errors.client}</div>
          )}
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
           Revenu du codebiteur en DA :
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

<label className="text-[#202121]/80 text-[14px]" htmlFor="SalaireCod">
           Age codebiteur :
            </label>
            <input
              className="border border-[#085526]/50 placeholder-[#085526]/50 text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px] rounded-[2px] focus:outline-none p-3"
              id="Agecod"
              name="Agecod"
              type="text"
              value={formik.values.Agecod}
              onChange={formik.handleChange}
              placeholder="Veuillez introduire l'age du codebiteur"
            />
            {formik.errors.Agecod && formik.touched.Agecod && (
              <div className="text-red-500 text-[12px]">
                {formik.errors.Agecod}
              </div>
            )}
          </div>

          
        )}

        <div className="flex flex-col space-y-1">
            <label className="text-[#202121]/80 text-[14px]" htmlFor="credit">
              Crédit:
            </label>
            <input
              className="border border-[#085526]/50 placeholder-[#085526]/50 text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px] rounded-[2px] focus:outline-none p-3"
              id="credit"
              name="credit"
              type="text"
              value={formik.values.credit}
              onChange={formik.handleChange}
              placeholder="Veuillez introduire le credit que veuillez emprunter"
            />
            {formik.errors.credit && formik.touched.credit && (
              <div className="text-red-500 text-[12px]">
                {formik.errors.credit}
              </div>
            )}
          </div>



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
          <label className="text-[#202121]/80 text-[14px]">Type de Crédit :</label>
          <button
  type="button"
  className="border border-[#085526]/50 text-[#202121]/80 p-3 rounded-[2px] bg-white shadow-sm flex justify-between w-[200px] lg:w-[400px] items-center"
  onClick={toggleDropdown} onChange={handleTypeChange}
>
  <span className={selectedCreditType ? "text-[#202121]/80" : "text-[#085526]/50 text-[14px] text-sm"}>
    {selectedCreditType ? selectedCreditType : "Sélectionner un type de crédit"}
  </span>
  <span className="ml-2">{showDropdown ? "▲" : "▼"}</span>
</button>

          {showDropdown && (
            <div className="border border-[#085526]/50 bg-white shadow-lg rounded-[2px] mt-2 w-[200px] lg:w-[400px]">
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
          {formik.errors.type && formik.touched.type && (
            <div className="text-red-500 text-[12px]">
              {formik.errors.type}
            </div>
          )}
        </div>
        <SliderComponent label="Durée de paiement" min={0} max={100} unit="mois"   onChange={handleSliderChange} />
 
        <div className="mt-6 flex flex-row space-x-2 ">
      <label className="text-[#202121]/80 font-semibold text-[14px]">Marge de bon fin (Hamish el jiddia) :</label>
        <input
          type="checkbox"
          checked={YesJiddia}
          onChange={handleCheckboxChange}
        />
        
      
    
    </div>
    <div>{YesJiddia ? ( <div className="flex flex-col space-y-1">
          <label className="text-[#202121]/80 text-[14px]" htmlFor="jiddia">
            Hamish el Jiddia en DA:
          </label>
          <input
            className="border border-[#085526]/50 placeholder-[#085526]/50 text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px] rounded-[2px] focus:outline-none p-3"
            id="jiddia"
            name="jiddia"
            type="text"
            value={formik.values.jiddia}
            onChange={formik.handleChange}
            placeholder="Veuillez introduire hamish el jiddia"
          />
          {formik.errors.jiddia && formik.touched.jiddia && (
            <div className="text-red-500 text-[12px]">{formik.errors.jiddia}</div>
          )}
        </div>): ''}</div>     

     <div className="sm:space-x-8  flex  flex-col sm:flex-row  items-center sm:space-y-0 space-y-5 ">
        <button type="submit" className="bg-[#085526] text-white  px-[60px] py-[8px] shadow-md" >
          Calculer
        </button>
        <button type="button" onClick={()=>
          {
            navigate('/')
          }
        }  className="bg-white text-black px-[60px] py-[8px] shadow-md">
          Annuler
        </button>
        </div>
      
       </form>
      
    </div>
  );
};
/* eslint-disable react/prop-types */
import { useState } from "react";

// Composant Slider avec couleur de fond dynamique
export const SliderComponent = ({
  label ,  // Le label du slider
  min,          // Valeur minimale
  max ,         // Valeur maximale
  unit ,     // Unité
  onChange
}) => {
  // État pour la valeur du slider
  const [value, setValue] = useState((min + max) / 2);

  console.log(value)
  const handleSliderChange = (e) => {

    setValue(e.target.value);  // Met à jour la valeur du slider
  };


  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue); // Passez la nouvelle valeur à `Formik`
  };

  // Calcul du pourcentage de la progression du slider
  const getBackgroundSize = () => {
    return ((value - min) * 100) / (max - min);
  };

  return (
    <div className="flex flex-col items-center">
      <label className="text-[#202121]/80 text-[14px] mb-2 font-bold" htmlFor={label}>
        {label} : {/* Affiche le label passé en paramètre */}
      </label>
      <div className="flex items-center space-x-2">
        <input
          id={label}
          type="range"
          min={min}        // Valeur minimale
          max={max}        // Valeur maximale
          value={value}    // Valeur actuelle du slider
          onChange={handleChange}  // Gère le changement
          className="slider w-[150px] sm:w-[300px] h-[8px] rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #007bff ${getBackgroundSize()}%, #d3d3d3 ${getBackgroundSize()}%)`, // Dégradé
            accentColor: '#007bff', // Couleur du curseur
          }}
        />
        <span className="text-[#202121]/80">{value} {unit}</span> {/* Affiche la valeur et l'unité */}
      </div>
    </div>
  );
};

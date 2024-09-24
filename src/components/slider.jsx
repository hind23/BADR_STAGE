/* eslint-disable react/prop-types */
import { useState } from "react";

// Composant Slider avec couleur de fond dynamique
export const SliderComponent = ({
  label = "Durée",  // Le label du slider
  min = 0,          // Valeur minimale
  max = 60,         // Valeur maximale
  unit = "mois",     // Unité
}) => {
  // État pour la valeur du slider
  const [value, setValue] = useState((min + max) / 2);

  const handleSliderChange = (e) => {
    setValue(e.target.value);  // Met à jour la valeur du slider
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
          onChange={handleSliderChange}  // Gère le changement
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

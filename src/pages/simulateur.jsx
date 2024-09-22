import { Form } from "../components/Form";
import { useState } from "react";

export const Simulateur = () => {
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

  return (
    <div className="bg-[#f8f9fa]">
      <Form onFormSubmit={handleFormSubmit} />
    </div>
  );
};

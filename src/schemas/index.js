import * as yup from 'yup';

// Basic schema
export const basicschema = yup.object().shape({
   email: yup.string().email("S'il vous plaît entrez un email valide !").required("Ce champs est obligatoire !"),
   num: yup.string()
      .matches(/^0\d{9}$/, "Veuillez saisir un numéro valid !")
      .required("Ce champs est obligatoire !"),
   Prenom: yup.string().required("Ce champs est obligatoire !"),
   Nom: yup.string().required("Ce champs est obligatoire !"),
   age: yup.string().required("Ce champs est obligatoire !"),
   salaire: yup.string().required("Ce champs est obligatoire !"),
   SalaireCod: yup.string(),
   Agecod: yup.string(),
   jiddia: yup.string(),
   credit: yup.string().required("Ce champs est obligatoire !"),
});


export const adminSchema = yup.object().shape({
   email: yup.string().email("S'il vous plaît entrez un email valide !").required("Ce champs est obligatoire !"),
   motDePasse: yup.string()
      .min(8, "Le mot de passe doit contenir au moins 8 caractères")
      .required("Ce champs est obligatoire !"),
});

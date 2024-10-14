import * as yup from 'yup';
export const basicschema=yup.object().shape({
   email : yup.string().email("S'il vous plait entrez un email valide !").required("Ce champs est obligatoire !"),
   
   num :  yup.string().length(10,"short").matches(/^0\d{9}$/, "Veuillez saisir un numéro valid !")
   .required("Ce champs est obligatoire !"),

   Prenom : yup.string().required("Ce champs est obligatoire !"),
   Nom : yup.string().required("Ce champs est obligatoire !"),
   age : yup.string().required("Ce champs est obligatoire !"),
   salaire : yup.string().required("Ce champs est obligatoire !"),
   SalaireCod : yup.string(),
   Agecod : yup.string(),
   jiddia: yup.string(),
   duree: yup.string().required("Ce champs est obligatoire !"),
   type: yup.string().required("Ce champs est obligatoire !"),
   credit: yup.string().required("Ce champs est obligatoire !"),
   client: yup.string().required("Ce champs est obligatoire !"),

})
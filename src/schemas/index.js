import * as yup from 'yup';
export const basicschema=yup.object().shape({
   email : yup.string().email("S'il vous plait entrez un email valide !"),
   
   num :  yup.string().length(10,"short").required("Ce champs est obligatoire !"),
   Prenom : yup.string().required("Ce champs est obligatoire !"),
   Nom : yup.string().required("Ce champs est obligatoire !"),
   age : yup.string().required("Ce champs est obligatoire !"),
   salaire : yup.string().required("Ce champs est obligatoire !"),
   SalaireCod : yup.string(),
   Agecod : yup.string(),
   jiddia: yup.string(),
   credit: yup.string().required("Ce champs est obligatoire !"),
   
})
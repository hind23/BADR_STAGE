import * as yup from 'yup';
export const basicschema=yup.object().shape({
    email : yup.string().email("S'il vous plait entrez un email valide !").required("Ce champs est obligatoire !"),
    num :  yup.string().length(10,"short").required("Ce champs est obligatoire !")
   ,
   Prenom : yup.string().required("Ce champs est obligatoire !"),
   Nom : yup.string().required("Ce champs est obligatoire !"),
   
})
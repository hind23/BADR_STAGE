import * as yup from 'yup';
export const basicschema=yup.object().shape({
    email : yup.string().email("please enter a valid email !").required("This field is required !"),
    num :  yup.string().length(10,"short").required("This field is required")
   ,
   confirmpassword : yup.string().oneOf([yup.ref("password"),null],"Passwords must match").required("This field is required"),
   Prenom : yup.string().required("This field is required !"),
   Nom : yup.string().required("This field is required !"),
   
})
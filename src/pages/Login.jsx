import {adminSchema} from "../schemas/index"
import { useFormik } from "formik";
import logo from "/logo_removebg.png"

export const Login=()=>
{

    const formik = useFormik({
        initialValues: {
          email: "",
          motDePasse: "",
        },
        validationSchema: adminSchema,
        onSubmit: (values) => {
       
          console.log(values);
        },
      });

const handleResetPassword=()=>
{

}

   return (
   <div className="flex justify-between py-4 mx-auto w-[90vw] space-y-6 items-center mt-[60px] flex-col">
    <div className="flex items-center justify-between">
    
 <img className="w-[200px]" src={logo} alt="logo de la badr"/>

    </div>
    <h1 className="text-4xl font-bold text-[#085526]/80 text-center">
Admin pannel
 </h1>
<form className="flex space-y-8 flex-col items-center"  onSubmit={formik.handleSubmit}>
<div className="flex flex-col space-y-2">
<label className="text-[#202121]/80 text-[16px]" htmlFor="email">Email :</label>
            <input
              className="border border-[#085526]/50 text-[#202121]/80  w-[350px] lg:w-[400px]  placeholder-[#085526]/50 placeholder:text-[16px] text-[16px] rounded-[2px] focus:outline-none py-4 p-3"
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
            <label className="text-[#202121]/80 text-[16px]" htmlFor="motDePasse">Mot de passe :</label>
            <input
              className="border border-[#085526]/50 text-[#202121]/80  w-[350px] lg:w-[400px] placeholder-[#085526]/50 placeholder:text-[16px] text-[16px] rounded-[2px] focus:outline-none py-4 p-3"
              id="motDePasse"
              name="motDePasse"
              type="password"
              value={formik.values.motDePasse}
              onChange={formik.handleChange}
              placeholder="Veuillez introduire votre mot de passe"
            />
            {formik.errors.motDePasse && formik.touched.motDePasse && (
              <div className="text-red-500 text-[12px]">{formik.errors.motDePasse}</div>
            )}
           <h1 onClick={handleResetPassword} className="text-black/70 cursor-pointer hover:underline">
            Mot de passe oubliée ?
          </h1> 
          </div>
          
          <button className="bg-teal-600 text-white py-2 px-4 rounded-lg border-none cursor-pointer transition-colors duration-300 hover:bg-teal-700">
  Se connecter
</button>

         
</form>

   </div>)

}
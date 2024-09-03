import { basicschema } from "../schemas/index";
import { useFormik } from "formik";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      Nom: "",
      Prenom: "",
      num: "",
    },
    validationSchema: basicschema,
    onSubmit: (values) => {
      console.log('Form values:', values);
      // Handle form submission logic
    },
  });

  return (
    <div className="bg-[#f8f9fa] ">

<form onSubmit={formik.handleSubmit} className="flex w-[90vw] items-center mx-auto flex-col space-y-4">
    <div className="flex flex-col space-y-1">
    <label className="text-[#202121]/80 text-left text-[14px]" htmlFor="email">
Email :
           </label>
      <input className="border text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px]   rounded-[2px] focus:outline-none p-3"
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
<label className="text-[#202121]/80 text-[14px]" htmlFor="Nom">
Nom :
           </label>
      <input className="border text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px]   rounded-[2px] focus:outline-none p-3"
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
<label className="text-[#202121]/80 text-[14px]" htmlFor="Prénom">
Prénom :
           </label>
      <input className="border text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px]   rounded-[2px] focus:outline-none p-3"
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
<label className="text-[#202121]/80 text-[14px]" htmlFor="num">
Numéro de téléphone :
           </label>
      <input className="border text-[#202121]/80 xxs:w-[300px] w-[200px] lg:w-[400px] placeholder:text-[12px] text-[16px]   rounded-[2px] focus:outline-none p-3"
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

      <button type="submit" className="bg-[#20b486] text-white  px-[60px] py-[8px]">Confirmer</button>
    </form>
    </div>
   
  );
};

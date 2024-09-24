
import fb from '/fb.svg';
//import Dribbble from '/public/Dribbble.svg';
import linkedin from '/linkedin.svg';
import insta from '/insta.svg';
import logo from '/logo.png'
import email from '/email.svg'
import adresse from '/adresse.svg'



// If using React Router for navigation
import { Link,useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate=useNavigate();
  return (
    <footer className="bg-[#085526] w-full font-roboto">
      <div className="w-[90vw] mx-auto flex flex-col sm:flex-row justify-center  items-center space-x-60 mb-20">

        <div className=' flex justify-center'>
          <div className='space-y-4 mt-20'>
            <ul className="flex flex-col space-y-4 text-white">
              <li className="font-bold mx-auto text-white text-[24px]">Contact Us</li>
              <li className="sm:text-[16px] text-[12px]  mx-auto">Call: +213 (0)21 989 323</li>
              <li className="text-[16px]  mx-auto"> 
  <a href="mailto:contact@badr.dz">
    <span className="font-semibold text-white sm:text-[16px] text-[12px] flex items-center space-x-4">
      <img src={email} alt="email" className='h-[20px]' />
      <p>Email: contact@badr.dz</p>
    </span>
  </a>
</li>

                <li className="sm:text-[16px] text-[12px]  mx-auto"> 
                <button>
                <span className="font-semibold  text-white  flex items-center space-x-4">
                            <img src={adresse} alt="adresse" className='h-[35px]' />
                            <p>Adresse: Siège social 17, Bd Colonel <br /> Amirouche, B.P 484, Alger.</p>
                          </span>
                  </button>
                </li>
            </ul>
<div className='block mx-auto w-fit'>
<div className="flex  space-x-4 text-[#343A40]">
              <button className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
                <a href="https://web.facebook.com/pageofficielledelabadr/?_rdc=1&_rdr">
                  <img src={fb} className='w-[18px] h-[18px]' alt="facebook" />
                </a>
              </button>

              <button className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
                <a href="https://www.linkedin.com/company/%D8%A8%D9%86%D9%83-%D8%A7%D9%84%D9%81%D9%84%D8%A7%D8%AD%D8%A9-%D9%88-%D8%A7%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D9%81%D9%8A%D8%A9-badr-banque/?originalSubdomain=dz">
                  <img src={linkedin} className='w-[18px] h-[18px]' alt="linkedin" />
                </a>
              </button>

              <button className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
                <a href="https://www.instagram.com/badrbank.dz/?locale=fr_FR&hl=af">
                  <img src={insta} className='w-[18px] h-[18px]' alt="insta" />
                </a>
              </button>

            </div>
</div>
          



          </div>


        </div>  

        <div className=' block w-fit mx-auto'>


<p className="font-bold text-white text-[24px]">
 Conditions&nbsp;bancaires
</p>
<a
 href="/documents/Condition-de-banque-finance-islamique-1.pdf"
 download
 className="hover:text-[#ffc107] text-white text-sm"
>
 Télécharger
</a>
</div>  

      </div>

   
      <img src={logo} onClick={()=>
      {navigate('/')}}
                className='md:w-[20%] w-[50%] my-10 mx-auto cursor-pointer h-[77px] rounded-full ml-auto '
              />
      {/* Links to Pages */}
      <div>
        <ul className="flex justify-center items-center text-white">
          <li className="text-[16px] relative">
            <Link to="/careers" className="hover:text-[#ffc107]">Careers </Link>
          </li>
          <li className="text-[16px] before:text-white relative before:content-['|'] before:px-2 ">
            <Link to="/privacypolicy" className="hover:text-[#ffc107]">Privacy Policy</Link>
          </li>
          <li className="text-[16px] relative before:text-white before:content-['|'] before:px-2 ">
            <Link to="/termsandconditions" className="hover:text-[#ffc107]">Terms & Conditions</Link>
          </li>
        </ul>
      </div>

      <div className="mt-8 mb-10 text-center text-white">
        <p>&copy;2024 Copyrights BADR BANK
        </p>
      </div>
    </footer>
  );
};
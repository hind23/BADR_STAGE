/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { useEffect, useState } from 'react';
import menu from '/menu.svg';
import close from '/close.svg';
import logo from '/logo2.png'
export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('Accueil'); // Default active link

  const navigate = useNavigate();

  const handleToggle = () => {
    setVisible(!visible);
  };



  const goToProfile = () => {
    navigate('/admin/profil'); // Navigate to profile page
  };



  const onResize = () => {
    if (window.innerWidth >= 640) setVisible(false);
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const linkClasses = (linkName) =>
    `hover:text-[#FFC107] ${activeLink === linkName ? 'text-[#FFC107]' : 'text-white'}`;

  return (
    <div className="fixed bg-teal-700  top-0  w-full font-roboto z-50">
      <div className='w-full flex items-center h-16 mx-auto bg-[#085526] z-50 
       border border-x-0  border-b-1'>
        <div className="sticky bg-[#085526] h-[50px] flex items-center justify-between w-[90%] mx-auto">
          <img onClick={()=>
            {
              navigate('/')
            }
          }
                src={logo}
                className='w-[200px] cursor-pointer  h-[50px]ml-auto '
              />
          
          {/* <SearchBar /> */}
          {!visible && (
            <img
              className='sm:hidden h-8 cursor-pointer block'
              src={menu}
              onClick={handleToggle}
            />
          )}
          {visible && (
            <img
              className='sm:hidden h-8 cursor-pointer block'
              src={close}
              onClick={handleToggle}
            />
          )}
          <div className="sm:flex font-medium hidden items-center space-x-6 ">
            <ul className="text-[13px] flex items-center space-x-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setActiveLink('Accueil')}
                  className={linkClasses('Accueil')}
                >

                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/qui"
                  onClick={() => setActiveLink('Qui somme nous ?')}
                  className={linkClasses('Qui somme nous ?')}
                >
                  Qui somme nous ?
                </Link>
              </li>
              <li>
                <Link
                  to="/simulateur"
                  onClick={() => setActiveLink('Simulateur')}
                  className={linkClasses('Simulateur')}
                >
                  Simulateur
                </Link>
              </li> <li>
                <Link
                  to="/login"
                  onClick={() => setActiveLink('login')}
                  className={linkClasses('login')}
                >
                  Connexion
                </Link>
              </li>
            </ul>
         
        
          </div>
        </div>
      </div>

      {visible  && (
        <ul className="w-full bg-[#085526] z-50 absolute font-medium text-[14px] flex-col items-center justify-center space-y-6 h-[250px]">
          <li className='text-center mt-[50px]'>
            <Link
              to="/"
              onClick={() => {setActiveLink('Accueil'), setVisible(false)}}
              className={linkClasses('Accueil')}
            >
              Accueil
            </Link>
          </li>
          <li className='text-center'>
            <Link
              to="/Qui"
              onClick={() => {setActiveLink('Qui somme nous ?'), setVisible(false)}}
              className={linkClasses('Qui somme nous ?')}
            >
              Qui somme nous ?

            </Link>
          </li>
          <li className='text-center'>
            <Link
              to="/simulateur"
              onClick={() => {setActiveLink('Simulateur'),
                setVisible(false)
              }}
              className={linkClasses('Simulateur')}
            >
              Simulateur
            </Link>
          </li>  <li className='text-center'>
            <Link
              to="/login"
              onClick={() => {setActiveLink('login'),
                setVisible(false)
              }}
              className={linkClasses('login')}
            >
              Connexion
            </Link>
          </li>
       
        </ul>
      )}

     
    </div>
  );
};
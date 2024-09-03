/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { useEffect, useState } from 'react';
import algiers from '/logo.png';
import menu from '/menu.svg';
import close from '/close.svg';
import logo from '/logo.png'
export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('Accueil'); // Default active link

  const navigate = useNavigate();

  const handleToggle = () => {
    setVisible(!visible);
  };

  const getEmailUsername = () => {
    return ["Bendahmene Nesrine", "ln_bendahmane@esi.dz"];
  };

  const goToProfile = () => {
    navigate('/admin/profil'); // Navigate to profile page
  };

  const logOut = () => {
    // Handle logout logic
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
    <div className='fixed  bg-[#085526]  top-0  w-full'>
      <div className='w-full  mx-auto bg-[#085526] z-50 
       border border-x-0  border-b-1'>
        <div className="sticky bg-[#085526] h-[50px] flex items-center justify-between w-[90%] mx-auto">
          <h3 className="text-[20px] font-pt-serif">
          <img
                src={logo}
                className='w-[120px] cursor-pointer h-[37px] rounded-full ml-auto '
              />
          </h3>
          <SearchBar />
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
                  to="/Qui"
                  onClick={() => setActiveLink('Qui somme nous ?')}
                  className={linkClasses('Qui somme nous ?')}
                >
                  Qui somme nous ?
                </Link>
              </li>
              <li>
                <Link
                  to="/users"
                  onClick={() => setActiveLink('User Management')}
                  className={linkClasses('User Management')}
                >
                  User Management
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
              onClick={() => setActiveLink('Accueil')}
              className={linkClasses('Accueil')}
            >
              Accueil
            </Link>
          </li>
          <li className='text-center'>
            <Link
              to="/Qui"
              onClick={() => setActiveLink('Qui somme nous ?')}
              className={linkClasses('Qui somme nous ?')}
            >
              Qui somme nous ?

            </Link>
          </li>
          <li className='text-center'>
            <Link
              to="/"
              onClick={() => setActiveLink('User Management')}
              className={linkClasses('User Management')}
            >
              User Management
            </Link>
          </li>
          <li className='w-8 mx-auto'>
            <button className='mx-auto text-center' onClick={() => goToProfile()}>
            </button>
          </li>
        </ul>
      )}

     
    </div>
  );
};
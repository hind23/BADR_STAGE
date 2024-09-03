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
  const [isConnected, setIsConnected] = useState(false);
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
    `hover:text-[#20B486] ${activeLink === linkName ? 'text-[#20B486]' : 'text-[#6D737A]'}`;

  return (
    <div className='fixed w-full'>
      <div className='w-full mx-auto bg-black z-50 bg-black
       py-2 border border-x-0 border-b-1'>
        <div className="sticky h-[50px] flex items-center justify-between w-[90%] mx-auto">
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
                  to="/admin"
                  onClick={() => setActiveLink('Accueil')}
                  className={linkClasses('Accueil')}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="./courseshold"
                  onClick={() => setActiveLink('Qui somme nous ?')}
                  className={linkClasses('Qui somme nous ?')}
                >
                  Qui somme nous ?
                </Link>
              </li>
              <li>
                <Link
                  to="./users"
                  onClick={() => setActiveLink('User Management')}
                  className={linkClasses('User Management')}
                >
                  User Management
                </Link>
              </li>
            </ul>
            {isConnected ? (
              <img
                src={algiers}
                onClick={goToProfile}
                className='w-[37px] cursor-pointer h-[37px] rounded-full ml-auto '
              />
            ) : (
              <div className="flex items-center justify-end ">
                <button
                  className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
                  onClick={() => goToProfile()}
                >
                 
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {visible && !isConnected && (
        <ul className="w-full bg-black z-50 absolute font-medium text-[14px] flex-col items-center justify-center space-y-6 h-[250px]">
          <li className='text-center mt-[50px]'>
            <Link
              to="/admin"
              onClick={() => setActiveLink('Accueil')}
              className={linkClasses('Accueil')}
            >
              Accueil
            </Link>
          </li>
          <li className='text-center'>
            <Link
              to="./courseshold"
              onClick={() => setActiveLink('Qui somme nous ?')}
              className={linkClasses('Qui somme nous ?')}
            >
              Qui somme nous ?

            </Link>
          </li>
          <li className='text-center'>
            <Link
              to="./users"
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

      {visible && isConnected && (
        <div className='mt-4 bg-black z-50 absolute w-[90%] mx-auto'>
          <div className='mx-auto space-x-6 flex'>
            <img src={algiers} className='rounded-full w-[80px] h-[80px]' alt="Profile picture" />
            <div className='flex-col flex items-left justify-center'>
              <h1 className='font-semibold text-[17px]'>
                {getEmailUsername()[0]}
              </h1>
              <h1 className='text-[12px] font-medium text-[#343a40] text-left'>
                {getEmailUsername()[1]}
              </h1>
            </div>
          </div>
          
          <ul className='space-y-6'>
            <li className='text-left text-[13px]'>
              <Link
                to="./admin"
                onClick={() => setActiveLink('Accueil')}
                className={linkClasses('Accueil')}
              >
                Accueil
              </Link>
            </li>
            <li className='text-left text-[13px]'>
              <Link
                to="./courseshold"
                onClick={() => setActiveLink('Qui somme nous ?')}
                className={linkClasses('Qui somme nous ?')}
              >
                Qui somme nous ?
              </Link>
            </li>
            <li className='text-left text-[13px]'>
              <Link
                to="./users"
                onClick={() => setActiveLink('User Management')}
                className={linkClasses('User Management')}
              >
                User Management
              </Link>
            </li>
          </ul>
          <ul className='space-y-6'>
            <li className='text-left text-[13px] cursor-pointer'> Language </li>
            <li className='text-left text-[13px] cursor-pointer'>Settings </li>
          </ul>
         
          <div className='flex items-center space-x-6'>
            <button onClick={logOut}>
              <img src={out} alt="Logout" />
            </button>
            <h1 className='font-bold text-[#F13C3C] text-[13px]'>
              <button onClick={logOut}>Log out</button>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
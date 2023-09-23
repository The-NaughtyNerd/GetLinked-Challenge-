import { Link } from 'react-router-dom';
import { close, menu } from '../assets';
import { useState } from 'react';
import { navLinkRouter, navLinks } from '../constants';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');
  return (
    <>
      <div className=" pb-4 relative">
        <div className="flex md:flex-row items-center justify-between md:px-10 px-3 pt-4">
          {/* Logo */}
          <Link to="/">
            <h1 className="md:text-4xl text-3xl font-clashDisplay font-bold text-white">
              get<span className="text-primary">linked</span>
            </h1>
          </Link>

          <div className="md:hidden ">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-6 h-6"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          {/* Menu for Large Screen*/}
          <div className="  md:block hidden">
            <div className="flex space-x-5 items-center ">
              {navLinks.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setActive(item.linkName);
                  }}
                >
                  <a
                    href={item.link}
                    className={`${
                      active === item.linkName ? 'text-white ' : 'text-gray200'
                    } text-gray-200 hover:text-white text-base font-medium font-montserrat`}
                  >
                    {item.linkName}
                  </a>
                </div>
              ))}

              {navLinkRouter.map((det) => (
                <Link
                  key={det.id}
                  to={det.link}
                  onClick={() => {
                    setActive(det.linkName);
                  }}
                  className={`${
                    active === det.linkName ? 'text-white ' : 'text-gray200'
                  } text-gray-200 hover:text-white text-base font-medium font-montserrat`}
                >
                  {det.linkName}
                </Link>
              ))}

              {/* Btn */}
              <Link to="/register">
                <button className="w-fit bg-gradient-to-r text-white text-base px-9 rounded-sm py-2 from-[#ff26b9] via-[#fe34b9] to-[#903aff] font-montserrat hover:from-[#903aff] hover:to-[#ff26b9] transition-all ease-out">
                  Register
                </button>
              </Link>
            </div>
          </div>

          {/* Menu for Mobile */}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } flex-col absolute z-50 top-16  right-0  w-full h-screen p-7 rounded-md space-y-7 bg-menuBg `}
          >
            {navLinks.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActive(item.linkName);
                  setToggle(!toggle);
                }}
              >
                <a
                  href={item.link}
                  className={`${
                    active === item.linkName
                      ? 'text-white border-b-2 pb-[4px] w-6'
                      : 'text-gray200'
                  } text-gray-200 hover:text-white text-base font-medium font-montserrat`}
                >
                  {item.linkName}
                </a>
              </div>
            ))}

            {navLinkRouter.map((det) => (
              <Link
                key={det.id}
                to={det.link}
                onClick={() => {
                  setActive(det.linkName);
                  setToggle(!toggle);
                }}
                className={`${
                  active === det.linkName
                    ? 'text-white border-b-2 pb-[4px] w-6'
                    : 'text-gray200'
                } text-gray-200 hover:text-white text-base font-medium font-montserrat`}
              >
                {det.linkName}
              </Link>
            ))}

            <Link
              to="/register"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <button className="w-fit bg-gradient-to-r text-white text-base px-9 rounded-sm py-2 from-[#ff26b9] via-[#fe34b9] to-[#903aff] font-montserrat hover:from-[#903aff] hover:to-[#ff26b9] transition-all ease-out">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

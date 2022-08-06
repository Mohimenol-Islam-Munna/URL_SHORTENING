import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const meuToggleHandler = () => {
    setMenuToggle(!menuToggle);
    console.log("meuToggleHandler");
  };

  return (
    <div className="w-full  sm:w-[85%] mx-auto flex flex-col sm:flex-row sm:gap-10 sm:py-1 relative">
      {/* logo  */}
      <button className="text-3xl basis-auto sm:basis-40 text-left sm:ml-0 p-3 pl-2 sm:pl-0">
        Shortly
      </button>

      {/* mobile menu button  */}
      <div
        onClick={meuToggleHandler}
        className={`absolute ${
          !menuToggle
            ? "top-2 hover:text-green-400"
            : "top-0 hover:text-red-600"
        } right-0 sm:hidden p-2 text-3xl hover:cursor-pointer`}
      >
        {!menuToggle ? <IoIosMenu /> : <span>x</span>}
      </div>

      {/* main menu  */}
      <div
        id="main_menu"
        className={`w-[100%] py-5 bg-[#35323E] sm:bg-white text-white sm:text-black mx-2 sm:mx-0 flex-grow ${
          !menuToggle ? "hidden" : "flex"
        } flex-col sm:flex sm:flex-row justify-between items-center `}
      >
        <div className="w-full flex flex-col items-center sm:flex-row gap-3 border-b-[1px] sm:border-b-0">
          <div>
            {/* invalid url in href through error in netlify so link replace with button  */}

            {/* <a href="#menu">Features</a> */}
            <button>Features t</button>
          </div>
          <div>
            {/* <a href="#menu">Pricing</a> */}
            <button>Pricing</button>
          </div>
          <div>
            {/* <a href="#menu">Resources</a> */}
            <button>Resources</button>
          </div>
        </div>

        <div className="w-full flex gap-3 flex-col items-center sm:flex-row sm:justify-end">
          <div>
            {/* <a href="#menu">Login</a> */}
            <button>Login</button>
          </div>
          <div className="bg-[#2ACFCF] px-10 py-2 rounded-full text-white">
            {/* <a href="#menu">Sign Up</a> */}
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

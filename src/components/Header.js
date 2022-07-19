import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  console.log("menuToggle ::", menuToggle);

  const meuToggleHandler = () => {
    setMenuToggle(!menuToggle);
    console.log("meuToggleHandler");
  };

  return (
    <div className=" bg-indigo-400 flex flex-col sm:flex-row sm:gap-10 sm:py-5 relative">
      {/* logo  */}
      <button className="text-3xl basis-auto sm:basis-40 text-left sm:ml-5 p-3">
        Shortly
      </button>

      {/* mobile menu button  */}
      <div
        onClick={meuToggleHandler}
        className={`absolute ${
          !menuToggle ? "top-2 hover:text-white" : "top-0 hover:text-red-600"
        } right-2 sm:hidden p-2 text-3xl hover:cursor-pointer`}
      >
        {!menuToggle ? <IoIosMenu /> : <span>x</span>}
      </div>

      {/* main menu  */}
      <div
        id="main_menu"
        className={`w-[100%] bg-gray-600 p-5 flex-grow ${
          !menuToggle ? "hidden" : "flex"
        } sm:flex flex-col sm:flex-row justify-between items-center`}
      >
        <div className="w-full border-b border-b-indigo-600  flex flex-col items-center sm:flex-row sm:border-b-0 gap-3">
          <div>
            <a href="#">Features</a>
          </div>
          <div>
            <a href="#">Pricing</a>
          </div>
          <div>
            <a href="#">Resources</a>
          </div>
        </div>

        <div className="w-full flex gap-3 flex-col items-center sm:flex-row">
          <div>
            <a href="#">Login</a>
          </div>
          <div>
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

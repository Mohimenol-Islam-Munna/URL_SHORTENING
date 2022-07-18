import React from "react";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="overflow-hidden bg-indigo-400 flex justify-between sm:justify-center items-center gap-10 py-5 relative">
      {/* logo  */}
      <button className="border border-red-500 basis-40 text-left ml-5">
        Shortly
      </button>

      {/* mobile menu button  */}
      <div className="sm:hidden border border-indigo-600 p-3 mr-2">
        <IoIosMenu />
      </div>

      {/* main menu  */}
      <div
        className="w-[100%] bg-yellow-500 flex-grow flex 
       flex-col sm:flex-row justify-between items-center absolute top-[100%] left-0
        sm:static"
      >
        <div className="border-b border-b-indigo-600  flex flex-col sm:flex-row sm:border-b-0 gap-3">
          <div>
            <a href="">Feaqtures</a>
          </div>
          <div>
            <a href="">Pricing</a>
          </div>
          <div>
            <a href="">Resources</a>
          </div>
        </div>

        <div className=" flex gap-3 flex-col sm:flex-row">
          <div>
            <a href="">Login</a>
          </div>
          <div>
            <a href="">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

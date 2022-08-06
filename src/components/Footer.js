import React from "react";
import { BsFacebook, BsTwitter, BsInstagram , BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[black] py-10">
      <div className="w-full border p-2 sm:p-0 sm:w-[85%] mx-auto flex flex-col sm:flex-row">
        <div className="basis-3/12 p-3">
          <h2 className="text-white text-center sm:text-left">Footer One</h2>
          <ul className="mt-4 text-white text-center sm:text-left">
            <li>item one</li>
            <li>item two</li>
            <li>item three</li>
            <li>item four</li>
          </ul>
        </div>
        <div className="basis-3/12 p-3">
          <h2 className="text-white text-center sm:text-left">Footer Two</h2>
          <ul className="mt-4 text-white text-center sm:text-left">
            <li>item one</li>
            <li>item two</li>
            <li>item three</li>
            <li>item four</li>
          </ul>
        </div>
        <div className="basis-3/12 p-3">
          <h2 className="text-white text-center sm:text-left">Footer Three</h2>
          <ul className="mt-4 text-white text-center sm:text-left">
            <li>item one</li>
            <li>item two</li>
            <li>item three</li>
            <li>item four</li>
          </ul>
        </div>
        <div className="basis-3/12 p-3">
          <ul className="flex gap-3 mt-1 text-white justify-center itams-center">
            <li>
              <BsFacebook />
            </li>
            <li>
              {" "}
              <BsTwitter />
            </li>
            <li>
              {" "}
              <BsInstagram />
            </li>
            <li>
              {" "}
              <BsLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

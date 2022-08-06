import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[black] py-10">
      <div className="w-full p-2 sm:p-0 sm:w-[85%] mx-auto flex flex-col sm:flex-row">
        <div className="basis-3/12 p-3">
          <h2 className="text-white text-center sm:text-left text-4xl">
            Shortly
          </h2>
        </div>
        <div className="basis-3/12 p-3">
          <h2 className="text-white text-center sm:text-left">Features</h2>
          <ul className="mt-4 text-white text-center sm:text-left">
            <li>Link Shortening</li>
            <li>Branded List</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="basis-3/12 p-3">
          <h2 className="text-white text-center sm:text-left">Resources</h2>
          <ul className="mt-4 text-white text-center sm:text-left">
            <li>Blogs</li>
            <li>Developer</li>
            <li>Supports</li>
          </ul>
        </div>

        <div className="basis-3/12 p-3">
          <h2 className="text-white text-center sm:text-left">Company</h2>
          <ul className="mt-4 text-white text-center sm:text-left">
            <li>About</li>
            <li>Our Team</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="basis-3/12 p-3">
          <ul className="flex gap-3 mt-1 text-white justify-center itams-center">
            <li>
              <a
                href="https://www.facebook.com/mohimenol.munna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MohimenolMunna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/mohimenol.munna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohimenol-munna-a54167132/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

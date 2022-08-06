import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row pt-10 sm:pt-20 pb-32">
      <div className="border-10 border-red-600 basis-full sm:basis-6/12 p-2 sm:p-10 sm:pl-[7.8%] flex justify-center items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl md:text-6xl mt-10 sm:mt-0">
            More than just shorter link
          </h1>
          <p className="mt-3">
            Biuld your brand's recognition and get detailed insites on how your
            links are performing
          </p>
          <div className="mt-3">
            <button className="bg-[#2ACFCF] px-16 py-4 rounded-full text-white mt-10">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="border-1 border-red-600 basis-full p-2 sm:p-0 sm:basis-6/12 flex justify-center sm:justify-end items-center">
        <img
          src="/images/illustration-working.svg"
          alt="hero_image"
          height="300px"
          width="500px"
        />
      </div>
    </div>
  );
};

export default Hero;

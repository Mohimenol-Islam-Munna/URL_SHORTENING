import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row pt-20 pb-32">
      <div className="basis-6/12 p-10 pl-24 flex justify-center items-center">
        <div>
          <h1 className="text-6xl">More than just shorter link</h1>
          <p className="mt-3">
            Biuld your brand's recognition and get detailed insites on how your
            links are performing
          </p>
          <div className="mt-3">
            <button className="bg-indigo-600 px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="basis-6/12 flex justify-end items-center">
        <img src="/images/illustration-working.svg" alt="hero_image" height="300px" width="500px"/>
      </div>
    </div>
  );
};

export default Hero;

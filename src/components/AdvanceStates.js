import React from "react";
import "../App.css";

const AdvanceStates = () => {
  return (
    <>
      <div className="mt-4 mb-40 sm:mt-16 sm:mb-32">
        <h2 className="mt-10 text-4xl text-center">Advance States</h2>
        <p className="mb-14 p-5 text-center md:px-32">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quos
          sapiente accusantium quidem magni, officia ullam veniam, maiores
          ratione dolore neque id nulla nisi explicabo excepturi quaerat
          veritatis odio autem.
        </p>

        <div className="mt-10 sm:py-10 flex flex-col md:flex-row sm:justify-between md:gap-5 lg:gap-10">
          {/* div 1  */}
          <div className="p-5 bg-white basis-4/12 connector rounded-md before:!hidden md:before:!flex md:before:!w-[20px] lg:before:!w-[40px]">
            <div>
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#35323E]  rounded-full -mt-14">
                <img
                  src="/images/icon-brand-recognition.svg"
                  style={{ width: "50%", height: "50%" }}
                  alt="band-recognition"
                />
              </div>
            </div>
            <h2 className="text-2xl mt-3">Brand Recognition</h2>
            <p className="text-md mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quam maiores totam delectus ratione voluptatem, ea, provident
              consequatur reiciendis, tenetur error quo odit. Iusto, expedita
              atque. Nulla tempore possimus culpa?
            </p>
          </div>

          <div className="p-5 bg-white basis-4/12 connector rounded-md relative top-10 before:!hidden md:before:!flex md:before:!w-[20px] lg:before:!w-[40px]">
            <div>
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#35323E]  rounded-full -mt-14">
                <img
                  src="/images/icon-detailed-records.svg"
                  style={{ width: "50%", height: "50%" }}
                  alt="band-recognition"
                />
              </div>
            </div>
            <h2 className="text-2xl mt-3">Detailed Records</h2>
            <p className="text-md mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quam maiores totam delectus ratione voluptatem, ea, provident
              consequatur reiciendis, tenetur error quo odit. Iusto, expedita
              atque. Nulla tempore possimus culpa?
            </p>
          </div>

          <div className="p-5 bg-white basis-4/12 rounded-md relative top-20">
            <div>
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#35323E]  rounded-full -mt-14">
                <img
                  src="/images/icon-fully-customizable.svg"
                  style={{ width: "50%", height: "50%" }}
                  alt="band-recognition"
                />
              </div>
            </div>
            <h2 className="text-2xl mt-3">Fully Customizable</h2>
            <p className="text-md mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quam maiores totam delectus ratione voluptatem, ea, provident
              consequatur reiciendis, tenetur error quo odit. Iusto, expedita
              atque. Nulla tempore possimus culpa?
            </p>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default AdvanceStates;

import React from "react";

const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 justify-between items-center mt-[156px]"
    >
      <div
        className={`border border-gray-300 shadow-sm  rounded-l-[10px] overflow-hidden`}
      >
        <div className="bg-gray-100 p-[18px] h-[90px] w-full">
          <div className="bg-primary-600 rounded-full size-[23px] flex flex-row justify-center items-center">
            <label className="block text-[14px] font-semibold text-gray-100">
              1
            </label>
          </div>
        </div>
        <div className="px-[38px] py-5 bg-primary-600 flex flex-row items-center justify-center h-[74px] w-full">
          <p className="font-inter font-medium text-[15px] text-gray-100">
            Ingresa el precio y las millas
          </p>
        </div>
      </div>

      <div className={`border border-gray-300 shadow-sm `}>
        <div className="bg-gray-100 p-[18px] h-[90px] w-full">
          <div className="bg-primary-600 rounded-full size-[23px] flex flex-row justify-center items-center">
            <label className="block text-[14px] font-semibold text-gray-100">
              2
            </label>
          </div>
        </div>
        <div className="px-[38px] py-5 bg-primary-600 flex flex-row items-center justify-center h-[74px] w-full">
          <p className="font-medium text-[15px] text-gray-100">
            Define cómo pagas al chofer y tus costos
          </p>
        </div>
      </div>

      <div
        className={`border border-gray-300 shadow-sm rounded-r-[10px] overflow-hidden `}
      >
        <div className="bg-gray-100 p-[18px] h-[90px] w-full">
          <div className="bg-primary-600 rounded-full size-[23px] flex flex-row justify-center items-center">
            <label className="block text-[14px] font-semibold text-gray-100">
              3
            </label>
          </div>
        </div>
        <div className="px-[38px] py-5 bg-primary-600 flex flex-row items-center justify-center h-[74px] w-full">
          <p className="font-medium text-[15px] text-gray-100">
            Obtén la ganancia neta y decide
          </p>
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  step: number;
  text: string;
  containerClassname?: string;
};

const Card = ({ step, text, containerClassname }: CardProps) => {
  return (
    <div className={`border border-gray-300 ${containerClassname}`}>
      <label>{step}</label>
      <p>{step}</p>
    </div>
  );
};
export default HowItWorks;

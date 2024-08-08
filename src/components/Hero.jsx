import React from "react";

const Hero = () => {
  return (
    <div className="bg-violet-700 h-[300px] flex flex-col justify-center items-center text-white">
      <div className="max-w-3xl px-6 sm:px-0">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
          Nico's Diner
        </h1>
        <p className="text-2xl sm:text-3xl mb-10">
          The best burgers and pizzas in town
        </p>
        <div className="flex justify-center">
          <button className="bg-violet-900 hover:bg-violet-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

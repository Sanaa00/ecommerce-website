import React from "react";
import NavBar from "../Component/NavBar";

function Home({ shopItem }) {
  return (
    <div className="bg-spi">
      <div className=" h-screen bg-spi py-6 sm:py-2 px-6 md:px-10 lg:px-16 xl:px-20">
        <NavBar shopItem={shopItem} />

        <div className="flex flex-col justify-between sm:w-1/2 mt-10 sm:mt-0 md:px-10 xl:px-20">
          <p className="text-rash text-4xl sm:text-4xl md:text-4xl xl:text-6xl 2xl:text-7xl  2xl:mt-6 font-semibold">
            Decent light. Awesome life
          </p>
          <p className="text-rasasy w-4/5 sm:w-full text-xl sm:text-2xl md:text-xl xl:text-2xl 2xl:text-4xl mt-6 lg:mt-6 xl:mt-10 2xl:mt-6">
            the best quality lamps with excellent lighting and long service
            life.
          </p>
          <button className="text-spi font-semibold text-xl shadow-lg bg-xanay px-6 sm:px-10 2xl:px-14 py-2 2xl:py-4 2xl:mt-6 rounded-full w-fit mt-6 sm:mt-4 md:mt-10 transition ease-in-out delay-150   duration-300  hover:-translate-y-1 hover:scale-105 ">
            Add to cart
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-5 md:px-10 xl:px-20  md:w-full xl:w-2/3 mt-10 sm:mt-10 lg:mt-10 justify-between">
          <div className="">
            <p className="text-rash text-2xl 2xl:text-4xl font-semibold">
              Durability
            </p>
            <p className="text-rasasy text-lg 2xl:text-2xl mt-2">
              We make chandeleirs and lamps with a guarantee of a long service
              life. we use only durable material.
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-rash text-2xl 2xl:text-4xl font-semibold ">
              Luminosity
            </p>
            <p className="text-rasasy text-lg 2xl:text-2xl mt-2">
              We only use light bulbs with a wide field of illumination its
              always light with us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

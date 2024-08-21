import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#342E09] mt-10">
        <div className="container px-4 mx-auto flex justify-center">
          <div className="pt-[2rem] pb-[2rem] mx-auto max-w-4xl">
            <img
              src="https://i.imgur.com/XlH3SL3.png"
              alt="Logo"
              className="h-[6rem] block md:mx-auto"
            />

            <div className="flex grid grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-5 -mx-3 lg:-mx-6">
              <div className="w-full md:w-auto p-3 md:px-6">
                
                  <Link className="text-lg text-amber-400 hover:text-white hover:text-xl duration-200 font-medium" to="/home">Home</Link>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                  <Link className="text-lg text-amber-400 hover:text-white hover:text-xl duration-200 font-medium" to="/aboutus">Sobre</Link>
                
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                  <Link to={'#'} className="text-lg text-amber-400 hover:text-white hover:text-xl duration-200 font-medium" >Projeto</Link>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                 <Link to={'#'} className="text-lg text-amber-400 hover:text-white hover:text-xl duration-200 font-medium"> Home</Link>
                
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                 <Link to={'#'} className="text-lg text-amber-400 hover:text-white hover:text-xl duration-200 font-medium"> Home</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-100"></div>
        <div className="container px-4 mx-auto">
          <p className="py-2 md:pb-5 text-md text-gray-400 font-medium text-center">
            © 2024 Hooda Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

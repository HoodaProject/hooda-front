import React from "react";
import { Link } from "react-router-dom";

function Cart(){
    return(
        <div className="container flex justify-center">

<div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 justify-center mt-10">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl ">
    <img
      src="https://media.cuponeria.com.br/1/2022/08/be98e3c9-dia-do-cachorro-e1661871387200.jpg"
      alt="card-image" className=""/>
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Seu carrinho Está vazio :/
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      Que tal Procurar algum de nossos produtos para enche-lo?
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link to="/home"><button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:bg-amber-400 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      type="button">
      Buscar produtos
    </button></Link>
  </div>
</div>
 

        </div>



    )


}

export default Cart
import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-hoodaLaranja">
        <div className="max-w-screen-xl px-4 py-2.5 mx-auto flex items-center justify-between">
          <div className="text-xl hover:text-2xl duration-200">
            <Link to={"/home"} className="flex items-center">
              <img
                src="https://i.imgur.com/bLUnK48.png"
                className="h-8 mr- sm:h-9 hover:h-9 " 
                alt="Hooda Logo"
              />
              <span className="m-2 pt-1 font-Docker-One dark:text-black">HOODA </span>

            </Link>
          </div>



          <div className="flex items-center lg:order-2">
            <Link to="/login" className="text-white font-d text-1xl hover:bg-amber-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-4 py-2 lg:px-5 lg:py-2.5  dark:focus:ring-purple-800"
            > Entrar
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div>
              <Link to={"/cart"}><img src="https://i.imgur.com/pTCHwra.png"
                className="h-4 mr- sm:h-6 m-3" 
                alt="Logo Carrinho"></img>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-medium">
              <li>
                <Link to={"/home"}

                  className="block py-2 pl-3 pr-4 text-white bg-amber-900 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-black dark:hover:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/aboutus"}
                  className="block py-2 pl-3 pr-4 text-white bg-amber-900 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-black dark:hover:text-white" 
                  aria-current="page"
                > Sobre
                </Link>
              </li>
              <li>
                <Link to={"/categorias"}
                  className="block py-2 pl-3 pr-4 text-white bg-amber-900 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-black dark:hover:text-white" 
                  aria-current="page"
                > Categorias
                </Link>
              </li>
              <li>
                <Link to={"/cadastroCategoria"}
                  className="block py-2 pl-3 pr-4 text-white bg-amber-900 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-black dark:hover:text-white" 
                  aria-current="page"
                > Cadastrar categorias
                </Link>
              </li>
              <li>
                <Link to={"/produtos"}
                  className="block py-2 pl-3 pr-4 text-white bg-amber-900 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-black dark:hover:text-white" 
                  aria-current="page"
                > Produto
                </Link>
              </li>
              <li>
                <Link to={"/cadastroProduto"}
                  className="block py-2 pl-3 pr-4 text-white bg-amber-900 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-black dark:hover:text-white" 
                  aria-current="page"
                > Cadastrar produto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;

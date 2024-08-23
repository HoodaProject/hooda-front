import { useContext, useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Menu() {
  const { usuario, handleLogout, adicionarProduto, removerProduto } = useContext(AuthContext);
  const token = usuario.token;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const [notifications, setNotifications] = useState<number>(0);
  
  if(adicionarProduto){

  }

  return (
    <>
      <nav className="bg-hoodaLaranja border-gray-200">
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
            <button className="font-Montserrat text-white text-1xl hover:bg-amber-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-4 py-2 lg:px-5 lg:py-2.5 dark:focus:ring-purple-800">
              {token === '' ? <Link to='/login'><button>Entrar</button></Link> : <button onClick={handleLogout}>Sair</button>}
            </button>
            <span className="sr-only">Open main menu


            </span>
            <div>
              <Link to={"/cart"}>
                <div className="relative inline-block">
                  <img src="https://i.imgur.com/pTCHwra.png" className="h-4 mr- sm:h-6 m-3" alt="Logo Carrinho" />
                  

                  {notifications > 0 && (
                    <span className="absolute top-4 right-[-0.5rem] -translate-x-1/2 -translate-y-1/2 bg-white text-hoodaLaranja text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </div>

              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-medium">
              <li>
                <Link to={"/home"} className="py-2 pl-3 pr-4 lg:bg-transparent font-Montserrat text-gray-700 hover:text-white flex" aria-current="page">
                  <img className="w-[1.2rem] mr-2" src="https://i.imgur.com/yf9Egva.png" alt="Home Icon" />
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/aboutus"} className="py-2 pl-3 pr-4 rounded lg:bg-transparent font-Montserrat text-gray-700 hover:text-white flex" aria-current="page">
                  <img className="w-[1.2rem] mr-2" src="https://i.imgur.com/Fqm5PLY.png" alt="Sobre Icon" />
                  Sobre
                </Link>
              </li>
              <li>
                <Link to={"/categorias"} className="block py-2 pl-3 pr-4 rounded lg:bg-transparent font-Montserrat text-gray-700 hover:text-white flex" aria-current="page">
                  <img className="w-[1.2rem] mr-2" src="https://i.imgur.com/3djsM6h.png" alt="Categorias Icon" />
                  Categorias
                </Link>
              </li>
              <li>
                <Link to={"/produtos"} className="py-2 pl-3 pr-4 rounded lg:bg-transparent font-Montserrat text-gray-700 hover:text-white flex" aria-current="page">
                  <img className="w-[1.2rem] mr-2" src="https://i.imgur.com/cWCiNdG.png" alt="Produto Icon" />
                  Produto
                </Link>
              </li>
              <li>
                <div className="relative inline-block text-left z-50">
                  <button onClick={toggleDropdown} className="font-Montserrat text-gray-700 px-4 py-2 rounded hover:text-white focus:outline-none flex">
                    <img className="w-[1.2rem] mr-2" src="https://i.imgur.com/FIzzRl6.png" alt="Cadastro Icon" />
                    Cadastro
                  </button>
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-[7rem] bg-gray-100 border border-gray-300 rounded shadow-lg flex flex-col">
                      <Link to="/cadastroCategoria" className="py-2 px-4 hover:bg-gray-200">Categoria</Link>
                      <Link to="/cadastroProduto" className="py-2 px-4 hover:bg-gray-200">Produto</Link>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;

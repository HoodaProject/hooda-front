import { useEffect, useState } from "react";
import ListProduto from "../../Components/Produto/ListProduto/ListProduto";
import Categoria from "../../model/Categoria";
import { buscar } from "../../services/Service";
import { Link } from "react-router-dom";
import Carrosel from "../../Components/Carrosel/Carrosel";

function Home() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <div className="grid grid-cols-12">
      <div className="min-h-[0vh] max-h-[60vh] max-md:hidden pb-8 flex items-center col-span-12 p-0 m-0">
        <Carrosel />
      </div>
      <div className="flex col-span-2 justify-end">
        <button
          className="p-2 m-4 text-white bg-blue-500 rounded-lg md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </button>

        <aside
          className={`m-4 w-[180px] h-[500px] rounded-md bg-amber-500 font-Montserrat text-white p-4 shadow-lg transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:w-64`}
        >
          <h2 className="text-2xl  border-b-2 flex justify-center font-semibold mb-4">
            Categorias
          </h2>
          <ul className="space-y-2">
            {categorias.map((categoria) => (
              <li
                key={categoria.id}
                className="p-2 rounded-lg hover:bg-gray-600"
              >
                <Link to={`/categorias/${categoria.id}`} className="block">
                  {categoria.nome}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="col-span-9 flex justify-center">
        <div>
          <div className="flex flex-row flex-wrap justify-evenly py-0 px-0">
            <ListProduto />
          </div>
          <p className="font-Docker-One text-hoodaLaranja flex justify-center">
            Paginas
          </p>

          <ul className="flex justify-center">
            <li className=" hover:text-hoodaLaranja hover:underline p-1">
              {" "}
              1{" "}
            </li>
            <li className=" hover:text-hoodaLaranja hover:underline p-1">
              {" "}
              2{" "}
            </li>
            <li className=" hover:text-hoodaLaranja hover:underline p-1">
              {" "}
              3{" "}
            </li>
            <li className=" hover:text-hoodaLaranja hover:underline p-1">
              {" "}
              4{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

import { useEffect, useState } from 'react';
import ListProduto from '../../Components/Produto/ListProduto/ListProduto'
import Categoria from '../../model/Categoria';
import { buscar } from '../../services/Service';
import { Link } from 'react-router-dom';
import Carrosel from '../../Components/Carrosel/Carrosel';


function Home() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [showList, setShowList] = useState(false);

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias);
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

        
        return (

                <div className='grid grid-cols-12'>
                        <div className='min-h-[0vh] max-h-[60vh] max-md:hidden pb-8 flex items-center col-span-12 p-0 m-0'>
                            <Carrosel />
                        </div>
                        <div className='text-hoodaLaranja xl:text-3xl text-center col-span-2 text-md md:text-2xl lg:text-3xl'>
                                Categorias
                                <ul className='text-black text-2xl p-2 m-2'>
                                        {categorias.map(categoria => (
                                                <li key={categoria.id} className='p-1 m-1 hover:text-hoodaLaranja hover:underline flex justify-center text-sm  md:text-md lg:text-2xl '>
                                                        <Link to={`/categorias/${categoria.id}`}>
                                                                {categoria.nome}
                                                        </Link>
                                                </li>
                                        ))}

                                </ul>
                        </div>

                        <div className='col-span-10 flex justify-center'>
                                <div>
                                        <div className='flex flex-row flex-wrap justify-evenly py-0 px-0'>

                                                <ListProduto />

                                        </div>
                                        <p className='font-Docker-One text-hoodaLaranja flex justify-center'>Paginas</p>

                                        <ul className='flex justify-center'>
                                                <li className=' hover:text-hoodaLaranja hover:underline p-1'> 1 </li>
                                                <li className=' hover:text-hoodaLaranja hover:underline p-1'> 2 </li>
                                                <li className=' hover:text-hoodaLaranja hover:underline p-1'> 3 </li>
                                                <li className=' hover:text-hoodaLaranja hover:underline p-1'> 4 </li>
                                        </ul>
                                </div>
                        </div>

                </div>
        )
}

export default Home;

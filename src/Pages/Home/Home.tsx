//import Carousel from '../../Components/Carrosel/Carrosel'
import Carrosel2 from '../../Components/Carrosel2/Carrosel2'
import ListProduto from '../../Components/Produto/ListProduto/ListProduto'

function Home() {
        return (

                <div className='grid grid-cols-12'>
                        <div className='min-h-[0vh] max-h-[60vh] max-md:hidden py-5 flex items-center col-span-12 p-0 m-0'>
                        <Carrosel2 />
                        </div>
                        <div className='text-hoodaLaranja text-3xl text-center col-span-2'>
                                Categorias

                                <ul className='text-black text-2xl p-2 m-2'>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        <li className='p-1 m-1 hover:text-hoodaLaranja hover:underline'> Lorem</li>
                                        
                                </ul>
                        </div>
                        
                        <div className='col-span-10 '>
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

export default Home
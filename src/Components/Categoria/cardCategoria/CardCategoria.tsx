import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    // <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
    //   <div>
    //     <div className="flex w-full bg-hoodaLaranja py-2 px-4 items-center gap-4">
    //       <h3 className='text-lg font-bold text-center uppercase '>{categoria.nome}</h3>
    //     </div>
    //     <div className='p-4 '>
    //       <p>{categoria.descricao}</p>
          
          
    //     </div>
    //   </div>
    //   <div className="flex">
    //   <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-white bg-hoodaLaranja hover:bg-amber-400 flex items-center justify-center py-2'>
    //       <button>Editar</button>
    //     </Link>
    //     <Link to={`/delete/${categoria.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
    //       <button>Deletar</button>
    //     </Link>
    //   </div>
    // </div>

    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div className="p-6">
  <h3 className='text-lg font-bold text-center uppercase m-7'>{categoria.nome}</h3>
  <p className='flex justify-center'>{categoria.descricao}</p>
  </div>
  <div className="p-6 pt-0 flex justify-evenly">
  <Link to={`/editarCategoria/${categoria.id}`}>
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-hoodaLaranja text-white shadow-md shadow-inner hover:shadow-lg hover:bg-amber-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4 "
      type="button">
     Editar
    </button></Link>
    <Link to={`/delete/${categoria.id}`}>
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-inner hover:shadow-lg hover:bg-amber-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4"
      type="button">
     Deletar
    </button></Link>
  </div>
</div>
  )
}

export default CardCategoria
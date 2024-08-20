//import React from 'react'

interface ProdutoProps{
    src: string; 
    alt: string;  
    nome: string
    preco: number
}

function Produto({nome, src, alt, preco}: ProdutoProps) {
  return (

    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-2">
      <div className="relative h-80">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-hoodaLaranja font-medium">{nome}</p>
          <p className="text-hoodaLaranja font-medium">R$ {preco.toFixed(2)}</p>
        </div>
        <p className="text-gray-600 text-sm font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button
          className="w-full bg-hoodaLaranja text-white py-2 px-4 rounded-lg shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  )
}

export default Produto
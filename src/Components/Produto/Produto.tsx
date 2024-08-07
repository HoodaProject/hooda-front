//import React from 'react'

interface ProdutoProps{
    src: string; 
    alt: string;  
    nome: string
    preco: number
}

function Produto({nome, src, alt, preco}: ProdutoProps) {
  return (

    <div className='border-4 m-2'>
        <img className="w-[200px] h-[100px]"
        src={src}
           alt={alt}
            />

        <h1>{nome}</h1>               
        <h1>R$ {preco}</h1>
    </div>
  )
}

export default Produto
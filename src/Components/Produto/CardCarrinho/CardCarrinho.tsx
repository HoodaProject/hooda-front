import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

import  Produto  from "../../../model/Produto"

interface CardProdutosProps {
    item: Produto
}

function CardCarrinho({ item }: CardProdutosProps) {
    const { adicionarProduto, removerProduto } = useContext(AuthContext)

    return (
        <div className=''>
        <div className="relative h-40">
          <img src={item.imagem} className="h-full w-full object-cover" alt="" />

        </div>
        <div className='p-4'>
          <div className="mb-2 flex items-center justify-between text-xl">
            <p className="text-hoodaLaranja font-medium">{item.nome}</p>
          </div>
          <div className="mb-2 flex items-center justify-between text-md">
            <p className="text-hoodaLaranja font-medium">R$ {item.preco.toFixed(2)}</p>
          </div>
          <p className="text-gray-600 text-sm font-normal opacity-75">
            Descrição: {item.descricao}
          </p>

          <p className="text-gray-600 text-sm font-normal opacity-75">
            Avaliação: {item.avaliacao}
          </p>

        </div>

        <div className="p-4 border-t border-gray-200 flex justify-evenly">
        <button className="bg-hoodaLaranja hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => adicionarProduto(item)}>Adicionar</button>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => removerProduto(item.id)}>Remover</button>
            </div>
        </div>
    )
}

export default CardCarrinho
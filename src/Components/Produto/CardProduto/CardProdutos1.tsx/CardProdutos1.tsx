import { useContext } from 'react'
import { Context } from '../../../../contexts/Contexts'

import  Produto  from "../../../../model/Produto"

interface CardProdutosProps {
    item: Produto
}

function CardProdutos1({ item }: CardProdutosProps) {
    const { adicionarProduto, removerProduto } = useContext(Context)

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="https://placehold.co/400x200" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.nome}</div>
                <p className="text-gray-700 text-base">{item.descricao}</p>
                <p>R${ item.preco }</p>
            </div>

            <div className="flex justify-center gap-1 px-6 pt-4 pb-2">
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => adicionarProduto(item)}>Adicionar</button>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => removerProduto(item.id)}>Remover</button>
            </div>
        </div>
    )
}

export default CardProdutos1
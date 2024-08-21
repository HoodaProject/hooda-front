import { useContext } from 'react'
import { Context } from '../../contexts/Contexts'

import CardProdutos from '../../Components/Produto/CardProduto/CardProdutos1.tsx/CardProdutos1'
import Produto from '../../model/Produto'

interface ProdutoProps {
  produto: Produto
}

function Carrinho({produto}:ProdutoProps) {
  const { items, limparCart } = useContext(Context)

  return (
    <>
      <div className='flex justify-end m-2'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={limparCart}>Finalizar Compra</button>
      </div>

      <div className='flex flex-col'>
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                items.map(produto => (
                  <CardProdutos key={produto.id} item={produto} />
                ))
              }
            </div>
          </div>
        </div>
      </ div >
    </>
  )
}

export default Carrinho
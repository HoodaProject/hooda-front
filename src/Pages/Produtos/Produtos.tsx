import { useState, useEffect } from 'react'
import CardProdutos from '../../Components/Produto/CardCarrinho/CardProdutos1'

import  {listar}  from '../../services/Service'
import  Produto  from '../../model/Produto'

function Produtos() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function listarProdutos() {
        try {
            await listar('/produtos', setProdutos)
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    }

    useEffect(() => {
        listarProdutos()
    }, [])

    return (
        <div className='flex flex-col'>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            produtos.map(produto => (
                                <CardProdutos key={produto.id} item={produto} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </ div >
    )
}

export default Produtos
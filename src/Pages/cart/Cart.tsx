import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import CardProdutos1 from '../../Components/Produto/CardCarrinho/CardCarrinho'

function Cart() {
    const { items, limparCart } = useContext(AuthContext)
console.log(items)
    return (
        <>

            <div className='flex flex-col'>
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                items.map(produto => (
                                    <CardProdutos1 key={produto.id} item={produto} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </ div >
            <div className='flex justify-center m-2 pt-6'> 
                <button className="bg-hoodaLaranja hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-full"
                    onClick={limparCart}>Finalizar Compra</button>
            </div>
        </>
    )
}

export default Cart
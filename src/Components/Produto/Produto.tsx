import Produto from "../../model/Produto"

interface ProdutoProps{
  produto: Produto
}

function ProdutoHome({produto}: ProdutoProps) {
  return (

    <div className="w-40 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-2">
      <div className="relative h-50">
        <img
      
          className="h-full w-full object-cover"
        />   {produto.imagem}
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-hoodaLaranja font-medium">{produto.nome}</p>
          <p className="text-hoodaLaranja font-medium">R$ {produto.preco.toFixed(2)}</p>
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

export default ProdutoHome
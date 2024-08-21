import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { buscar } from '../../../services/Service';

interface Produto {
    id: 0; 
    nome: string;
    descricao: string;
    preco: number;
}

function ProdutosPorCategoria() {
    const { id } = useParams<{ id: string }>(); // Define o tipo do parâmetro como string
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {
        await buscar(`/categorias=${id}?produtos`, setProdutos);
    }

    useEffect(() => {
        if (id) {
            buscarProdutos();
        }
    }, [id]);

    return (
        <div>
            <h1>Produtos da Categoria {id}</h1>
            <div className='grid grid-cols-3 gap-4'>
                {produtos.map(produto => (
                    <div key={produto.id} className='border p-4'>
                        <h2>{produto.nome}</h2>
                        <p>{produto.descricao}</p>
                        <p>Preço: R${produto.preco}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProdutosPorCategoria;

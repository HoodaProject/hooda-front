import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { buscar } from '../../../services/Service';
import Categoria from '../../../model/Categoria';
import { AuthContext } from '../../../contexts/AuthContext';
import { toastAlerta } from '../../../utils/ToastAlerta';

function ProdutosPorCategoria() {
    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>(); // Define o tipo do parâmetro como string
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: "",
        descricao: "",
        produto: null
    });

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            toastAlerta("Erro ao encontrar categoria", "erro");
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id);
        }
    }, [id]);

    return (
        <div className='flex flex-col items-center pt-4'>
            <div className='w-full bg-gray-200 max-w-6xl p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md'>
                <h1 className='text-hoodaLaranja font-Montserrat text-2xl py-5 text-center'> {categoria.nome}</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                    {categoria.produto?.map(item => (
                        <div key={item.id} className=''>
                            <div className="w-60 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-2">
                                <div className="relative h-40">
                                    <img src={item.imagem} className="h-full w-full object-cover" alt="" />
                                </div>
                                <div className='p-4'>
                                    <div className="mb-2 flex items-center justify-between text-xl">
                                        <h2 className='text-hoodaLaranja font-medium'>{item.nome}</h2>
                                    </div>
                                    <div className="mb-2 flex items-center justify-between text-md">
                                        <p className="text-hoodaLaranja font-medium">Preço: R${item.preco}</p>
                                    </div>
                                    <p className="text-gray-600 text-sm font-normal opacity-75">Descrição: {item.descricao}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProdutosPorCategoria;


import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Categoria from '../../../model/Categoria'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/ToastAlerta'


function DeleteCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente','info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado','info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategorias() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Categoria', 'erro')
        }

        retornar()
    }
    return (

        <div className='container flex justify-center mt-20'>
        <div className="relative flex flex-col justify-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div className="p-6 ">
  <h3 className='text-lg font-bold text-center uppercase m-7'>Deletar categoria {categoria.nome}?</h3>
  <p className='flex justify-center'>{categoria.descricao}</p>
  </div>
  <div className="p-6 pt-0 flex justify-evenly">
  
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-hoodaLaranja text-white shadow-md hover:shadow-lg hover:bg-amber-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4 "
      type="button" onClick={retornar}>
     Não
    </button>
     
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md hover:shadow-lg hover:bg-amber-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4"
      type="button" onClick={deletarCategorias}>
     Sim
    </button>
        </div>
    </div>
</div>
    )
}

export default DeleteCategoria
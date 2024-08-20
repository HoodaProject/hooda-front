import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Categoria from '../../../model/Categoria'
import { buscar, deletar } from '../../../services/Service'


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
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
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

            alert('Categoria apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar o Categoria')
        }

        retornar()
    }
    return (
        // <div className='container w-1/3 mx-auto'>
        //     <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

        //     <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o categoria a seguir?</p>

        //     <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        //         <header className='py-2 px-6 bg-hoodaLaranja text-white font-bold text-2xl'>categoria</header>
        //         <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
        //         <div className="flex">
        //             <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
        //             <button className='w-full text-slate-100 bg-hoodaLaranja hover:bg-amber-400 flex items-center justify-center' onClick={deletarCategorias}>
        //                 Sim
        //             </button>
        //         </div>
        //     </div>
        // </div>

        <div className='container flex justify-center mt-20'>
        <div className="relative flex flex-col justify-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div className="p-6 ">
  <h3 className='text-lg font-bold text-center uppercase m-7'>Deletar categoria {categoria.nome}?</h3>
  <p>{categoria.descricao}</p>
  </div>
  <div className="p-6 pt-0 flex justify-evenly">
  
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-hoodaLaranja text-white shadow-md shadow-inner hover:shadow-lg hover:bg-amber-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4 "
      type="button" onClick={retornar}>
     Não
    </button>
     
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-inner hover:shadow-lg hover:bg-amber-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4"
      type="button" onClick={deletarCategorias}>
     Sim
    </button>
        </div>
    </div>
</div>
    )
}

export default DeleteCategoria
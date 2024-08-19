import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import Categoria from '../../model/Categoria'
import { buscar, deletar } from '../../services/Service'

function DeleteCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
            
            })
        } catch (error: any) {
          
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
            })

            alert('Categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar o categoria')
        }

        retornar()
    }return
    
    (

     "hello"
    )

}

export default DeleteCategoria
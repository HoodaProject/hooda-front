import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
 import Usuario from '../../model/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import { Link } from 'react-router-dom';

    function Register() {

let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) 
      setConfirmaSenha("")                 
    }
  }

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-7xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="md:max-w-md w-full px-4 py-4">
            <form onSubmit={cadastrarNovoUsuario}>
              <div className="mb-12">
                <h3 className="text-3xl font-Docker-One text-hoodaLaranja">Cadastrar</h3>
                <p className="text-sm mt-4 text-gray-800">Já tem uma conta? <Link to="/login" className="text-black hover:text-hoodaLaranja font-semibold hover:underline ml-1 whitespace-nowrap">Faça login</Link></p>
              </div>

              <div>
                <label className="text-gray-800 text-xs block mb-2">Nome</label>
                <input
                  name="nome"
                  type="text"
                  required
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Nome"
                   value={usuario.nome}
                  onChange={atualizarEstado}
                />
              </div>

              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Usuário</label>
                <input
                  name="usuario"
                  type="text"
                  required
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Usuário"
                  value={usuario.usuario}
                   onChange={atualizarEstado}
                />
              </div>

              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Foto</label>
                <input
                  name="foto"
                  type="text"
                  required
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Foto"
                   value={usuario.foto}
                   onChange={atualizarEstado}
                />
              </div>

              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Senha</label>
                <input
                  name="senha"
                  type="password"
                  required
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Senha"
                   value={usuario.senha}
                   onChange={atualizarEstado}
                />
              </div>

              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Confirmar Senha</label>
                <input
                  name="confirmarSenha"
                  type="password"
                  required
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Confirmar Senha"
                   value={confirmaSenha}
                   onChange={handleConfirmarSenha}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <button
                  type="button"
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-red-400 hover:bg-red-700 focus:outline-none"
                   onClick={back}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-hoodaLaranja hover:bg-amber-400 focus:outline-none"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>

          <div className="md:h-full rounded-xl lg:p-12 p-8">
            <img src="https://i.imgur.com/XlH3SL3.png" className="w-full h-full object-contain" alt="login-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
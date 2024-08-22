import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/ToastAlerta';
import UsuarioLogin from '../../../model/UsuarioLogin';

function FormularioUsuario() {
    const [usuario, setUsuario] = useState<UsuarioLogin>({} as UsuarioLogin)

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario: usuarioContext, handleLogout } = useContext(AuthContext);
    const token = usuarioContext.token;

    async function buscarPorId(id: string) {
        try {
            await buscar(`/usuarios/${id}`, setUsuario, {
                headers: {
                    Authorization: token,
                },
            });
        }
        catch (error) {
            toastAlerta('Erro ao buscar usuário', 'erro');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
          buscarPorId(id)
        }
      }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
        console.log(JSON.stringify(usuario))
    }

    async function gerarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== "") {
            try {
                await atualizar(`/usuarios/atualizar`, usuario, setUsuario, {
                    headers: {
                        'Authorization': token
                    }
                })

                toastAlerta('Usuário atualizado com sucesso', 'sucesso');
                retornar()

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar o Usuário', 'erro')
                }

            }
        } 
        useEffect(() => {
            if (token === '') {
                toastAlerta('Você precisa estar logado', 'info');
                navigate('/login');
            }
        }, [token, navigate]);

    }

    function retornar() {
        navigate("/perfil")
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id !== "" ? 'Editar Perfil' : 'Criar Perfil'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoUsuario}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="usuario">E-mail de Usuário</label>
                    <input
                        type="text"
                        placeholder="Nome de Usuário"
                        name="usuario"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.usuario}
                        readOnly
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        placeholder="Senha"
                        name="senha"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Foto URL (opcional)</label>
                    <input
                        type="text"
                        placeholder="URL da foto"
                        name="foto"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-hoodaLaranja hover:bg-amber-400 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    {id !== "" ? 'Salvar Alterações' : 'Criar Perfil'}
                </button>
            </form>
        </div>
    );
}

export default FormularioUsuario

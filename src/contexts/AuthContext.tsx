import { createContext, ReactNode, useState } from "react";

import UsuarioLogin from "../model/UsuarioLogin";
import { login } from "../services/Service";
import { toastAlerta } from "../utils/ToastAlerta";
import Produto from "../model/Produto";

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    updateUsuarioContext(novosDados: Partial<UsuarioLogin>): void;
    isLoading: boolean
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
    
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, userLogin, setUsuario);
      toastAlerta("Usuário logado com sucesso", "sucesso");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toastAlerta("Dados do usuário inconsistentes", "info");
      setIsLoading(false);
    }
  }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }
    function updateUsuarioContext(novosDados: Partial<UsuarioLogin>) {
        setUsuario((prevState) => ({
            ...prevState,
            ...novosDados,
        }));
    }
        const [items, setItems] = useState<Produto[]>([])
    
        const quantidadeItems = items.length
    
        function adicionarProduto(produto: Produto) {
            setItems(state => [...state, produto])
        }


  function removerProduto(produtoId: number) {
    const indice = items.findIndex((items) => items.id === produtoId);
    let novoCart = [...items];

    if (indice >= 0) {
      novoCart.splice(indice, 1);
      setItems(novoCart);
    }
  }

  function limparCart() {
    alert("Compra Efetuada com Sucesso");
    setItems([]);
  }

    return (    // Adicionar as propriedades ao Provider já existente
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading, adicionarProduto, removerProduto, updateUsuarioContext, limparCart, items, quantidadeItems }}>
            {children}
        </AuthContext.Provider>
    )
}


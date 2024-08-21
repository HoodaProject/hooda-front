import { createContext, ReactNode, useState } from "react";
import  Produto  from "../model/Produto";

interface ContextProps {
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
}

interface ContextProviderProps {
    children: ReactNode
}

export const Context = createContext({} as ContextProps)

export function Provider({ children }: ContextProviderProps) {

   
    const [items, setItems] = useState<Produto[]>([])

    const quantidadeItems = items.length

    
    function adicionarProduto(produto: Produto) {
        setItems(state => [...state, produto])
    }

  
    function removerProduto(produtoId: number) {

    
        const indice = items.findIndex(items => items.id === produtoId) 
        let novoCart = [...items]  

      
        if(indice >= 0){
            novoCart.splice(indice, 1)
            setItems(novoCart) 
        }
    }

    function limparCart() {
        alert("Compra Efetuada com Sucesso")
        setItems([])
    }



    return (  
        <Context.Provider value={{ adicionarProduto, removerProduto, limparCart, items, quantidadeItems }}>
            {children}
        </Context.Provider>
    )

}
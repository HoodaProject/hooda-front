import React, { useContext, useEffect, useState } from 'react'
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { toastAlerta } from '../../../utils/ToastAlerta';
import { buscar, buscar2 } from '../../../services/Service';
import CardProduto from '../CardProduto/CardProduto';
import Produto from '../../../model/Produto';
import ProdutoHome from '../Produto';

function ListProduto () {

    const [produtos, setProdutos] = useState<Produto[]>([]);
  
    async function buscarProdutos() {    
        await buscar2('/produtos', setProdutos);
    }

    useEffect(() => {
      buscarProdutos();
    }, [produtos.length]);
  
    return (
      <>
        {produtos.length === 0 && (
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {produtos.map((produto) => (
            <ProdutoHome key={produto.id} produto={produto} />
          ))}
        </div>
      </>
    );
  }
  

export default ListProduto
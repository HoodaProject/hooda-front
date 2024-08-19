
import React, { useContext, useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import CardCategoria from '../cardCategoria/CardCategoria';
import Categoria from '../../../model/Categoria';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();



  async function buscarCategoria() {
    try {
      await buscar('/categorias', setCategorias, {
        
      });
    } catch (error: any) {
  
    }
  }


  useEffect(() => {
    buscarCategoria();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
function buscarCategoria() {
  throw new Error('Function not implemented.');
}


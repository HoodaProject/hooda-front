import { useContext, useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../model/Categoria';
import { buscar } from '../../../services/Service';
import CardCategoria from '../cardCategoria/CardCategoria';
import { toastAlerta } from '../../../utils/ToastAlerta';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;


  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <ColorRing visible={true} colors={["#FEAE04","#FEAE04","#FEAE04","#FEAE04","#FEAE04"]}/>
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {categorias.map((categoria) => (
          <CardCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </>
  );
}

export default ListaCategorias;
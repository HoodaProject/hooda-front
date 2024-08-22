import { useContext, useEffect, useState } from 'react'
import { ColorRing, DNA } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { toastAlerta } from "../../../utils/ToastAlerta";
import { buscar } from "../../../services/Service";
import CardProduto from "../CardProduto/CardProduto";
import Produto from "../../../model/Produto";

function ListProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;


  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>
      {produtos.length === 0 && (
        <ColorRing visible={true} colors={["#FEAE04","#FEAE04","#FEAE04","#FEAE04","#FEAE04"]} />
      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}

export default ListProduto;

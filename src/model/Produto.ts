import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
    id: number; 
    avaliacao: number;
    descricao: string;
    estoque: number; 
    imagem: string;
    nome: string;
    preco: number; 
    categoria: Categoria | null;
    usuario: Usuario | null;
}
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import DeleteCategoria from "./Components/Categoria/deleteCategoria/DeleteCategoria"
import FormularioCategoria from "./Components/Categoria/formularioCategoria/FormularioCategoria";
import ListaCategorias from "./Components/Categoria/listCategoria/ListCategoria";
import { ToastContainer } from 'react-toastify'
import ListProduto from "./Components/Produto/ListProduto/ListProduto";
import FormProduto from "./Components/Produto/FormProduto/FormProduto";
import DeleteProduto from "./Components/Produto/DeletarProduto/DeletarProduto";
import Cart from "./Pages/cart/Cart";
import Perfil from './Pages/Perfil/Perfil';
import FormularioUsuario from "./Components/Perfil/formularioUsuario/formularioUsuario";
import ProdutosPorCategoria from "./Components/Produto/ProdutoCategoria/ProdutoCategoria";


function App() {
  return (
    <>
    <ToastContainer />
     <AuthProvider>
      <BrowserRouter>
        <Menu/>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />-
            <Route path="/delete/:id" element={< DeleteCategoria />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deleteProduto/:id" element={< DeleteProduto />} />
            <Route path="/cadastroProduto" element={<FormProduto />} />
            <Route path="/produtos" element={<ListProduto />} />
            <Route path="/editarProduto/:id" element={<FormProduto />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/editarPerfil/:id" element={<FormularioUsuario />} />
            <Route path="/categorias/:id" element={<ProdutosPorCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

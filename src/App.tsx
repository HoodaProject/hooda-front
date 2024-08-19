import "./App.css";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import DeleteCategoria from "./Components/Categoria/DeleteCategoria"

function App() {
  return (
    <>
     <AuthProvider>
      <BrowserRouter>
        <Menu />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />-
            {/* <Route path="/delete/:id" element={< DeleteCategoria />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

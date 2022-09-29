import React, { createContext, useState } from "react";
import { Navigate, Routes, Route }  from 'react-router-dom';
import Cadastro from "./pages/Users/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Users/Login";
import CadastroEdit from "./pages/CadastroEdit";


export const AuthContext = createContext<IProviderAuth>({ token: null, setAuth: null});

interface IProviderAuth {
    token: any,
    setAuth: any
  }

const Routess: any = () => {
    const [auth, setAuth] = useState({ token: localStorage.getItem("token")});
    const setAuthLS = (newAuth: any)=>{
        setAuth(newAuth);
        localStorage.setItem("token", newAuth.token);
        console.log(localStorage.getItem("token"));
    }
    return (
        <AuthContext.Provider value={{ token: auth, setAuth: setAuthLS }}>
            <Routes>
                <Route
                    path="/"
                    element={auth.token == null ? 
                    <Navigate to='/login' replace /> :
                    <Home />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route
                    path="/cadastrar-nota"
                    element={auth.token == null ? 
                    <Navigate to='/login' replace /> :
                    <CadastroEdit/>} />
                <Route
                    path="/edit/:id"
                    element={auth.token == null ? 
                    <Navigate to='/login' replace /> :
                    <CadastroEdit/>} />
            </Routes>
        </AuthContext.Provider>
    );
}

export default Routess;
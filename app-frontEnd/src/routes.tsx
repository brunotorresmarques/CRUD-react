import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route, Link, useNavigate }  from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";


export const AuthContext = createContext<IProviderAuth>({ token: null, setAuth: null});

interface IProviderAuth {
    token: any,
    setAuth: any
  }

const Routess: any = () => {
    const [auth, setAuth] = useState({ token: localStorage.getItem("token"), nome: localStorage.getItem("nome")});
    const setAuthLS = (newAuth: any)=>{
        setAuth(newAuth);
        console.log(newAuth)
        localStorage.setItem("token", newAuth.token);
    }
    const navigate = useNavigate();
    return (
        <AuthContext.Provider value={{ token: auth, setAuth: setAuthLS }}>
            <Routes>
                <Route
                    path="/"
                    element={auth.token == null ? 
                    <Navigate to='/login' replace /> :
                    <Home />} />
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </AuthContext.Provider>
    );
}

export default Routess;
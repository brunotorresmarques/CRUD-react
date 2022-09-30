import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../../../styles/forms.css';
import { AuthContext } from "../../../routes"
import {LoginUser} from "../../../service/User"



const Login = () => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    function updatedLogin(e) {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }



    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        LoginUser(login).then((response) => {
            auth.setAuth({ token: response.data.token});
            navigate('/');
        }).catch((error) => {
            alert("Usário ou senha incorreta");
        })
    };

    return (
        <div className="add-edit">
            <form
                className="add-edit__form bg-dark"
                onSubmit={(e) => {handleSubmit(e)}}
            >
                <h1>Login</h1>
                <label className='label' htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Seu Email..."
                    value={login.email}
                    onChange={(e) => { updatedLogin(e) }}
                />

                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Sua senha..."
                    value={login.password}
                    onChange={(e) => { updatedLogin(e) }}
                />

                <input type="submit" />
                <div className='div-cad'>
                    <p>
                        Ainda não tem uma conta?
                        <Link to="/cadastro"> Cadastre-se</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
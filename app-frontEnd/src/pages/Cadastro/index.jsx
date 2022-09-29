import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/forms.css';
import { AuthContext } from "../../routes"
import { CadastroUser} from "../../service/User"

const Cadastro = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    function updatedUser(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }



    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        CadastroUser(user).then((response) => {
            alert("Cadastrado com sucesso!");
            navigate("/login");
        }).catch((error) => {
            alert("Usuário não cadastrado");
        })
    };

    return (
        <div className="add-edit">
            <form
                className="add-edit__form"
                onSubmit={(e) => {handleSubmit(e)}}
            >
                <h1>Cadastro</h1>
                <label htmlFor="name" color='#fff'>Nome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu Nome..."
                    value={user.name}
                    onChange={(e) => updatedUser(e)}
                />

                <label className='label' htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Seu Email..."
                    value={user.email}
                    onChange={(e) => updatedUser(e)}
                />

                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Sua senha..."
                    value={user.password}
                    onChange={(e) => updatedUser(e)}
                />

                <input type="submit" />
                <div className='div-cad'>
                    <p>
                        Já tem uma conta?
                        <Link to="/login"> Fazer Login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Cadastro
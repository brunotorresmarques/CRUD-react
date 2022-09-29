import '../../styles/forms.css';
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="add-edit">
            <form
                className="add-edit__form"
            >
                <h1>Login</h1>
                <label className='label' htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Seu Email..."
                />

                <label htmlFor="senha">Senha:</label>
                <input
                    type="text"
                    id="senha"
                    name="senha"
                    placeholder="Sua senha..."
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
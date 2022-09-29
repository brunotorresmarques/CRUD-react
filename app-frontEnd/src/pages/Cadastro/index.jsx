import '../../styles/forms.css';
import {Link} from 'react-router-dom'

const Cadastro = () => {
    return (
        <div className="add-edit">
            <form
                className="add-edit__form"
            >
                <h1>Cadastro</h1>
                <label htmlFor="nome" color='#fff'>Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Seu Nome..."
                />

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
                        Já tem uma conta?
                        <Link to="/login"> Fazer Login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Cadastro
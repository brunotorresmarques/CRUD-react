import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../routes';
import Header from "../../components/Header"
import './styles.css'
import { Listar, DeleteNotas } from "../../service/Notas";


const Home = () => {
    const [notas, setNotas] = useState([])
    const context = useContext(AuthContext)


    useEffect(() => {
        carregarNotas()
    }, [])

    function carregarNotas() {
        Listar(context.token.token).then(
            (response) => {
                if (response.data != null) {
                    setNotas(response.data.notes)
                }
            }
        ).catch(
            (error => {
                console.log(error);
            })
        )
    }

    const onDelete = (id) => {
        DeleteNotas(context.token.token, id).then(
            (response) => {
                carregarNotas()
                alert("Nota Deletada");
            }
        ).catch(
            (error => {
                console.log(error);
            })
        )
    };

    return (
        <div>
            <Header />
            <div className="home">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notas.map((nota, index) => {
                            return (
                                <tr key={nota.id}>
                                    <td>{nota.title}</td>
                                    <td>{nota.description}</td>
                                    <td>
                                        <Link to={`/edit/${nota.id}`}>
                                            <button className="btn-b btn-edit">Editar</button>
                                        </Link>
                                        <button
                                            className="btn-b btn-delete"
                                            onClick={() => onDelete(nota.id)}
                                        >
                                            Deletar
                                        </button>
                                        <Link to={`/view/${nota.id}`}>
                                            <button className="btn-b btn-view">Ver</button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
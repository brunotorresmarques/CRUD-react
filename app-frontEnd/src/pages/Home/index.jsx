import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Header from "../../components/Header"
import './styles.css'

const Home = () => {
    const [notas, setNotas] = useState([])

    const onDelete = (id) => {};

    return (
        <div>
            <Header />
            <div className="home">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Descrição</th>
                            <th>Conteúdo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notas.map((nota, index) => {
                            return (
                                <tr key={nota.id}>
                                    <td>{nota.title}</td>
                                    <td>{nota.description}</td>
                                    <td>{nota.content}</td>
                                    <td>
                                        <Link to={`/update/${nota.id}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button
                                            className="btn btn-delete"
                                            onClick={() => onDelete(nota.id)}
                                        >
                                            Delete
                                        </button>
                                        <Link to={`/view/${nota.id}`}>
                                            <button className="btn btn-view">View</button>
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
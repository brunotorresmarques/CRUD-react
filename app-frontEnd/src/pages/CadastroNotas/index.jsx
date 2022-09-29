import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/forms.css';
import { AuthContext } from "../../routes"
import Header from "../../components/Header";

const CadastroNotas = () => {
    const [nota, setUser] = useState({
        title: '',
        content: '',
        description: ''
    })

    function updatedNota(e) {
        setUser({
            ...nota,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nota)
    };

    return (
        <div>
            <Header />
            <div className="add-edit">
                <form
                    className="add-edit__form bg-dark"
                    onSubmit={(e) => { handleSubmit(e) }}
                >
                    <h1>Cadastrar Nota</h1>
                    <label htmlFor="title" color='#fff'>Título:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Título..."
                        value={nota.title}
                        onChange={(e) => updatedNota(e)}
                    />

                    <label className='label' htmlFor="content">Conteúdo:</label>
                    <input
                        type="text"
                        id="content"
                        name="content"
                        placeholder="Conteúdo..."
                        value={nota.content}
                        onChange={(e) => updatedNota(e)}
                    />

                    <label htmlFor="description">Descrição:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Descrição..."
                        value={nota.description}
                        onChange={(e) => updatedNota(e)}
                    />

                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default CadastroNotas
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../../styles/forms.css';
import { AuthContext } from "../../routes"
import Header from "../../components/Header";
import { Get, Cria, AtualizaNota } from '../../service/Notas'

const CadastroEdit = () => {
    const [nota, setNota] = useState({
        title: '',
        content: '',
        description: ''
    })
    const context = useContext(AuthContext)
    const { id } = useParams();



    function updatedNota(e) {
        setNota({
            ...nota,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        if (id != null) {
            Get(context.token.token, id).then(
                (response) => {
                    if (response.data.note != null) {
                        console.log(response.data.note)
                        setNota({
                            ...nota,
                            title: response.data.note.title,
                            content: response.data.note.content,
                            description: response.data.note.description
                        })
                    }

                }
            ).catch(
                (error => {
                    console.log(error);
                })
            )
        }
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (id == null) {
            Cria(context.token.token, nota).then(
                (response) => {
                    setNota(
                        {
                            title: '',
                            content: '',
                            description: ''
                        }
                    )
                    alert("Nota Criada");
                }
            ).catch(
                (error => {
                    console.log(error);
                })
            )
        } else {
            AtualizaNota(context.token.token, id, nota).then(
                (response) => {
                    alert("Nota Editada");
                }
            ).catch(
                (error => {
                    console.log(error);
                })
            )
        }
    };

    return (
        <div>
            <Header />
            <div className="add-edit">
                <form
                    className="add-edit__form bg-dark"
                    name="Enviar"
                    onSubmit={(e) => { handleSubmit(e) }}
                >
                    {
                        id == null ? <h1>Cadastrar Nota</h1>: <h1>Editar Nota</h1>
                    }
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

                    <input type="submit" value={"Cad"} />
                </form>
            </div>
        </div>
    )
}

export default CadastroEdit
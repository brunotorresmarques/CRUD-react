import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../routes';
import { GetNota } from '../../service/Notas';
import './styles.css';

const View = () => {
    const [data, setData] = useState({});
    const context = useContext(AuthContext)
    const { id } = useParams();


    useEffect(() => {
        GetNota(context.token.token, id).then(
            (response) => {
                setData(response.data.note);
                console.log(response.data.note)
            }
          ).catch(
              (error => {
                  console.log(error);
              })
          )
    },[])

    return (
        <div className="container mt-5">
            <div className="view">
                <div className="card">
                    <div className="card-header">
                        <p>Detalhes da Nota</p>
                    </div>
                    <div className="container">
                        <strong>Título: <br /></strong>
                        <span>{data.title}</span>
                        <br />
                        <br />
                        <strong>Descrição: <br /></strong>
                        <span>{data.description}</span>
                        <br />
                        <br />
                        <strong>Conteúdo: <br /> </strong>
                        <span>{data.content}</span>
                    </div>
                    <br />
                    <br />

                    <Link to="/">
                        <button
                            className="btn-b btn-edit"
                        >
                            Voltar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default View;
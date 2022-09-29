import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid bg-dark">
                <Link className="navbar-brand text-light" to={'/'}>Flimed</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse div-links" id="navbarNavAltMarkup">
                    <div className="navbar-nav div-links">
                        <Link className="nav-link text-light" to='/'>Home</Link>
                        <Link className="nav-link text-light" to='/cadastrar-nota'>Cadastrar</Link>
                    </div>
                    <form class="d-flex" role="search">
                        <button class="btn btn-success" type="submit">Sair</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
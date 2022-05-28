import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/Mufid_logo.png'


export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark my-3">
        <div className="container">
            <Link className="navbar-brand" to={'/'}>
                <img src={Logo} alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
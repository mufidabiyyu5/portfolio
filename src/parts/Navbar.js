import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/Mufid_logo.png'

export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container container-fluid">
            <Link className="navbar-brand" to="#">
                <img src={Logo} alt="Mufid's Logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
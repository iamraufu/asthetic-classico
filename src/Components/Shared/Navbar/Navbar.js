import './Navbar.css';
import React from 'react';
import logo from '../../../Folder/logo.png'

const Navbar = () => {
    return (
        <div style={{backgroundColor:'#89CFF0'}} className="fw-bold sticky-top">
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="" className='img-fluid' width="60" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto text-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/events">EVENTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/executives">EXECUTIVES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/leaderboard">LEADERBOARD</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/registration">REGISTRATION</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
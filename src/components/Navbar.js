import React from "react";
import logo from '../img/logo.png';
import "./Navbar.css";

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><img src={logo} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Производставо</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Расчет цены</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Галерея</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">О нас</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Контакты</a>
                </li>
            </ul>
        </div>
    </nav>
);
import React from 'react';
import './Header.css';

//import { NavLink } from 'react-router-dom';
//import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header() {
    return (
        <header>
            <div className='header-container'>
                <div className='navbar-top'>
                    <div className='logo'></div>
                    <nav>
                        <ul>Névválasztó</ul>
                        <ul>Keresés</ul>
                        <ul>Beküldés</ul>
                        <ul>Random</ul>
                        <ul>Kontakt</ul>
                    </nav>
                </div>
                <div className='login-register'>
                    <button className='login-button'>Bejelentkezés</button>
                    <button className='register-button'>Regisztráció</button>
                </div>
            </div>
        </header>
    )
}

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { NavLink } from 'react-router-dom';
// NavLink can be styled based on whether it is active or not

//import AnchorLink from 'react-anchor-link-smooth-scroll'; --- v2 has come out since

import './Header.css';


export default function Header() {
    return (
        <header>
            <div className='header-container'>
                <div className='navbar-top'>
                    <div className='logo'><NavLink to='/home'></NavLink></div>
                    <nav>
                            <ul>
                                <li><AnchorLink offset= '120' href='#hero-section'>Főoldal</AnchorLink> </li>
                                <li><AnchorLink offset= '120' href='#search-section'>Névválasztó</AnchorLink> </li>
                                <li><AnchorLink offset= '120' href='#random-name-section'>Random</AnchorLink> </li>
                                <li><AnchorLink offset= '120' href='#registration-section'>Regisztráció</AnchorLink> </li>
                                <li><AnchorLink href='#footer'>Kontakt</AnchorLink> </li>
                            </ul>
                    </nav>
                </div>
                <div className='login-register'>
                    <button className='login-button'><NavLink to='/profile'>Bejelentkezés</NavLink></button>
                    <button className='register-button'>Regisztráció</button>
                </div>
            </div>
        </header>
    )
}

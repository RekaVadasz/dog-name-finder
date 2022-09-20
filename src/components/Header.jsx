import React from 'react';

//import { NavLink } from 'react-router-dom';
//import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header() {
    return (
        <header>
            <div>logo</div>
            <nav>
                <ul>Névválasztó</ul>
                <ul>Keresés</ul>
                <ul>Beküldés</ul>
                <ul>Random</ul>
                <ul>Kontakt</ul>
            </nav>
            <div>
                <button>Bejelentkezés</button>
                <button>Regisztráció</button>
            </div>
        </header>
    )
}

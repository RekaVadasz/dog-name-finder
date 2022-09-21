import React from 'react';
import './Footer.css';

import mailIcon from '../../assets/envelope-solid.svg';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';


export default function Footer() {
    return (
        <footer>
            <div className='logo'></div>

            <div className='navbar-bottom'>
                <nav>
                    <ul>Névválasztó</ul>
                    <ul>Keresés</ul>
                    <ul>Beküldés</ul>
                    <ul>Random</ul>
                </nav>
            </div>

            <div className='contact'>
                <a href='mailto:vadasz.reka87@gmail.com' target='_top' className='email-icon'>
                    <img src={mailIcon}></img>
                </a>
                <a href='https://github.com/RekaVadasz/dog-name-finder' target='blank' className='github-icon'>
                    <img src={githubIcon}></img>
                </a>
                <a href='https://www.linkedin.com/in/reka-vadasz/' target='blank' className='linkedin-icon'>
                    <img src={linkedinIcon}></img>
                </a>
            </div>

        </footer>
    )
}

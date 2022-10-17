import React from 'react';
import { useState } from 'react';
import './Header.css';
import logoutIcon from '../../assets/logout.svg';
import profileIcon from '../../assets/profile.svg';

//import AnchorLink from 'react-anchor-link-smooth-scroll'; --- v2 has come out since
//import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

import { NavLink } from 'react-router-dom';
// NavLink can be styled based on whether it is active or not

import { HashLink } from 'react-router-hash-link';
import UserContext from '../../providers/UserContext';
import { useContext } from 'react';

// this function is for Hashlink to scroll with offset of 120px
const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
/* 
inline solution, but with no smooth scroll: 
scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -120) }} 
*/


export default function Header() {

    const { user, isLoggedIn, logInAndOut } = useContext(UserContext);

    //const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <header>
            <div className='header-container'>

                <div className='navbar-top'>
                    <HashLink to='/home'><div className='logo'></div></HashLink>
                    <nav>
                        <ul>

                            {/* <li><AnchorLink offset= '120' href='#random-name-section'>Random</AnchorLink> </li> */}

                            <li>
                                <HashLink 
                                    smooth 
                                    scroll={el => scrollWithOffset(el)}
                                    to='/home#hero-section'
                                    >Főoldal
                                </HashLink>
                            </li>

                            <li>
                                <HashLink 
                                    smooth 
                                    scroll={el => scrollWithOffset(el)}
                                    to='/home#search-section'
                                    >Névválasztó
                                </HashLink>
                            </li>

                            <li>
                                <HashLink 
                                    smooth 
                                    scroll={el => scrollWithOffset(el)}
                                    to='/home#random-name-section'
                                    >Random
                                </HashLink>
                            </li>

                            <li>
                                <HashLink 
                                    smooth 
                                    scroll={el => scrollWithOffset(el)}
                                    to='/home#registration-section'
                                    >Regisztráció
                                </HashLink>
                            </li>

                            <li>
                                <HashLink 
                                    smooth 
                                    scroll={el => scrollWithOffset(el)}
                                    to='/#footer'
                                    >Kontakt
                                </HashLink>
                            </li>

                        </ul>
                    </nav>
                </div>

                {!isLoggedIn
                &&
                <div className='login-register'>
                    <button className='login-button' onClick={logInAndOut}>Bejelentkezés</button>
                    <button className='register-button'>
                        <HashLink 
                            smooth 
                            scroll={el => scrollWithOffset(el)}
                            to='/home#registration-section'
                            >Regisztráció
                        </HashLink>
                    </button>
                </div>}

                {isLoggedIn
                &&
                <div className='profile-logout'>
                    <img src={profileIcon} alt='profile icon' />
                    <div>
                        <NavLink to='/profile'>{user.name}</NavLink>
                    </div>
                    <img onClick={logInAndOut} src={logoutIcon} alt='logout'/>
                </div>
                }
            </div>
        </header>
    )
}

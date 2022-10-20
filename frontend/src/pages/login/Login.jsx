import { React, useState, useRef } from 'react';
import Layout from '../Layout';

import './Login.css';

import AuthContext from '../../contexts/AuthContext';

import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export default function Login() {

    const { setUser, logIn } = useContext(AuthContext);

    const usernameRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState('');
    console.log(error)
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // - - - - handle submit - - - - 

    const handleSubmit = async function (e) {
        e.preventDefault();

        if (!usernameRef.current.value || !passwordRef.current.value) {
            setError('missing input')
            return
        }

        setError('')

        try {
            setLoading(true)
            const response = await fetch('./login', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({'username': usernameRef.current.value, 'password': passwordRef.current.value})
            });

            //if : response status vizsgálata
            const data = await response.json(); //response: object. .json(): produces a JS object
            //itt miért áll le?
            setUser(data);
            logIn();
            navigate('/profile')
        } catch { //pl. elmegy a net
            setError('failed to login')
        }
        setLoading(false)
    }

    return (
        <Layout>
            <div className='login-page-container'>

                <h1>Bejelentkezés már regisztrált felhasználónévvel</h1>

                <form action=''>
                    <label htmlFor='register-username'>Felhasználónév</label>
                    <input
                        placeholder='Felhasználónév'
                        type='text'
                        id='register-username'
                        name='register-username'
                        ref={usernameRef}
                        required
                    />
                    <label htmlFor='register-password'>Jelszó</label>
                    <input
                        placeholder='Jelszó'
                        type='password'
                        id='register-password'
                        name='register-password'
                        ref={passwordRef}
                        required
                    />

                    {error === 'missing input' && <div className='login-error-missing-fields'>Hiányzó adatok</div>}
                    {error === 'failed to login' && <div className='login-error-missing-fields'>Hibás felhasználónév vagy jelszó</div>}

                    <button onClick={handleSubmit} disabled={loading}>Bejelentkezés</button>
                </form>

                <p>
                    <HashLink 
                        smooth 
                        scroll={el => scrollWithOffset(el)}
                        to='/home#registration-section'
                        >Még nem regisztráltál?
                    </HashLink>
                </p>
                
            </div>
        </Layout>
    )
}
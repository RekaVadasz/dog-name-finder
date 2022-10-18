import React from 'react';
import Layout from '../Layout';

import './Login.css';

export default function Login() {
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
                />
                <label htmlFor='register-password'>Jelszó</label>
                <input
                    placeholder='Jelszó'
                    type='password'
                    id='register-password'
                    name='register-password'
                />
                <button>Bejelentkezés</button>
            </form>

            <p>Még nem regisztráltál?</p>
            
        </div>
    </Layout>
  )
}

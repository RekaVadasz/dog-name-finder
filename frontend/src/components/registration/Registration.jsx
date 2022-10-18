import { React, useState, useRef } from 'react';
import './Registration.css';

export default function Registration() {
    
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    


    const [userDetails, setUserDetails] = useState({});
    const [error, setError] = useState('')
    console.log(error)



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!usernameRef.current.value) {
            setError('Username missing')
            return
        }

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError('Passwords do not match')
        }


    }


    return (
        <section id='registration-section'>
            <h2>Regisztráció</h2>
            <p>Regisztrált felhasználóként te is feltölthetsz új kutyákat az adatbázisba és el is mentheted a kedvenceidet!</p>

            <form action=''>
                <legend>Ingyenes regisztráció</legend>

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

                <label htmlFor='register-password-confirm'>Jelszó megerősítése</label>
                <input 
                    placeholder='Jelszó még egyszer' 
                    type='password' 
                    id='register-password-confirm' 
                    name='register-password-confirm'
                    ref={passwordConfirmRef}
                    required
                />

                <button onClick={handleSubmit}>Regisztrálok</button>
            </form>

            <div className='sitting-jack-russel'></div>
        </section>
    )
}

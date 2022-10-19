import { React, useState, useRef } from 'react';
import './Registration.css';

export default function Registration() {
    
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // - - - - handle submit - - - - 

    const handleSubmit = async function (e) {
        e.preventDefault();

        if (!usernameRef.current.value || !passwordRef.current.value || !passwordConfirmRef.current.value) {
            setError('missing input')
            return
        }

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError('passwords different')
            return
        }

        setError('')

        try {
            setLoading(true)
            await fetch('./register', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({'username': usernameRef.current.value, 'password': passwordRef.current.value})
            })
        } catch {
            setError('failed to create account')
        }
        setLoading(false)
        console.log("posted")
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
                {error === 'missing input' && <div className='register-error-missing-fields'>Kérjük töltsd ki az összes beviteli mezőt!</div>}
                {error === 'passwords different' && <div className='register-error-passwords-match'>A két jelszó nem egyezik.</div>}

                <button onClick={handleSubmit} disabled={loading}>Regisztrálok</button>
            </form>

            <div className='sitting-jack-russel'></div>
        </section>
    )
}

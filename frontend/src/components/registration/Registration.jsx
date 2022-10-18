import React from 'react';
import './Registration.css';

export default function Registration() {




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
                />

                <label htmlFor='register-password'>Jelszó</label>
                <input 
                    placeholder='Jelszó' 
                    type='password' 
                    id='register-password' 
                    name='register-password'
                />

                <label htmlFor='register-password-check'>Jelszó megerősítése</label>
                <input 
                    placeholder='Jelszó még egyszer' 
                    type='password' 
                    id='register-password-check' 
                    name='register-password-check'
                />

                <button>Regisztrálok</button>
            </form>

            <div className='sitting-jack-russel'></div>
        </section>
    )
}

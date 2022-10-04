import React from 'react';
import './Registration.css';

export default function Registration() {
  return (
    <section id='registration-section'>
        <h2>Regisztráció</h2>
        <p>Regisztrált felhasználóként feltöltheted saját kutyusod képét és adatait, böngészhetsz a képgalériánkban és be is küldheted a kedvenc kutyaneveid! </p>
        <form action=''>
            <legend>Ingyenes regisztráció</legend>

            <div className='register-name'>
                <label htmlFor='register-last-name'></label>
                <input defaultValue='Keresztnév' type='text' id='register-last-name' name='register-last-name'/>

                <label htmlFor='register-first-name'></label>
                <input defaultValue='Vezetéknév'type='text' id='register-first-name' name='register-first-name' />
            </div>

            <label htmlFor='register-email'></label>
            <input defaultValue='Email cím' type='email' id='register-email' name='register-email' />

            <label htmlFor='register-password'></label>
            <input defaultValue='Jelszó' type='password' id='register-password' name='register-password'/>

            <button>Regisztrálok</button>
        </form>

        <div className='sitting-jack-russel'></div>
    </section>
  )
}

import React from 'react';
import './RandomName.css';

export default function RandomName() {
    return (
        <section id='random-name-section'>
            <h2>Bízd a véletlenre!</h2>
            <div className='random-name-text'>
                <p>Kérj egy véletlenszerűen kiálasztott nevet adatbázisunból, amibe már <strong>128 kutyanevet</strong> gyűjtöttünk össze!</p>
                <button>Kérek egy nevet!</button>
            </div>
            <div className='ball-illustration'>
                <div className='barking-collie'></div>
                <div className='ball-curve'></div>
                <div className='yellow-ball'></div>
            </div>
        </section>
    )
}

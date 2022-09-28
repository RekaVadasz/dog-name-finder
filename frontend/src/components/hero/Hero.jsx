import React from 'react';
import './Hero.css';
import Corgi from '../corgi/Corgi';

export default function Hero() {
  return (
    <section id='hero-section'>
        <div className='hero-left'>
            <p>Találd meg a tökéletes nevet négylábú kedvencednek!</p>
            <button>Kipróbálom</button>
        </div>

        <div className='hero-animation'>
            <Corgi />
        </div>
    </section>
  )
}

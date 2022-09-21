import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <p>Találd meg a tökéletes nevet négylábú kedvencednek!</p>
            <button>Kipróbálom</button>
        </div>
        <div className='hero-animation'></div>
    </div>
  )
}

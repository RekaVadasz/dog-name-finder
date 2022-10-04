import React from 'react';
import './DogCardSmall.css';

import dogImage from '../../assets/dog-images/suzy.jpg';
import favouriteIcon from '../../assets/favourite-filled.svg';
import expandIcon from '../../assets/expand-solid.svg';
import femaleIcon from '../../assets/female.svg';
import mediumDogIcon from '../../assets/medium-size-dog.svg';

export default function DogCardSmall() {
    return (
        <div className='card-small'>

            <div className='card-small-details'>
                <div className='card-small-name'>Suzy</div>
                <div className='card-small-breed-text'>fajtája:</div>
                <div className='card-small-breed'>keverék</div>
                <div className='card-small-traits-text'>jellemzők:</div>
                <div className='card-small-traits'>
                    <div>Játékos</div>
                    <div>Aktív</div>
                    <div>Bújós</div>
                    <div>Falánk</div>
                </div>
                <img className='card-small-gender-icon' src={femaleIcon} alt='female' />
                <img className='card-small-size-icon' src={mediumDogIcon} alt='medium dog' />
            </div>

            <div className='card-small-image'>
                <img className='card-small-dog-image' src={dogImage} alt='dog' />
                <img className='card-small-favourite-icon' src={favouriteIcon} alt='heart' />
                <img className='card-small-expand-icon' src={expandIcon} alt='expand' />
            </div>

        </div>
    )
}

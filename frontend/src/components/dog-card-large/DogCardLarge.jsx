import React from 'react';
import './DogCardLarge.css';

import dogImage from '../../assets/dog-images/Guba.jpg';
import favouriteIcon from '../../assets/favourite-filled.svg';
import femaleIcon from '../../assets/female.svg';
import mediumDogIcon from '../../assets/medium-size-dog.svg';
import closeIcon from '../../assets/close-icon.svg';
import heartIcon from '../../assets/heart-peach.svg';

export default function DogCardLarge() {
    return (
        <div className='card-large'>

            <div className='card-large-details'>
                <div className='card-large-name-text'>név:</div>
                <div className='card-large-name'>Guba</div>
                <div className='card-large-breed-text'>fajta:</div>
                <div className='card-large-breed'>keverék</div>
                <div className='card-large-gender-text'>nem:</div>
                <div className='card-large-gender'>lány</div>
                <div className='card-large-size-text'>méret:</div>
                <div className='card-large-size'>kicsi</div>
                <div className='card-large-traits-text'>jellemzők:</div>
                <div className='card-large-traits'>
                    <div>Játékos</div>
                    <div>Aktív</div>
                    <div>Bújós</div>
                    <div>Félénk</div>
                </div>

                <div className='card-large-likes'>
                    <img className='card-large-heart-icon' src={heartIcon} alt='small heart' />
                    <div className='card-large-likes-number'>12</div>
                </div>
                <div className='card-large-uploader'>
                    <span className='card-large-uploader-text'>beküldő:</span>
                    <span className='card-large-uploader-name'>Eszter</span>
                </div>

                <img className='card-large-gender-icon' src={femaleIcon} alt='female' />
                <img className='card-large-size-icon' src={mediumDogIcon} alt='medium dog' />
            </div>

            <div className='card-large-image'>
                <img className='card-large-dog-image' src={dogImage} alt='dog' />
                <img className='card-large-favourite-icon' src={favouriteIcon} alt='heart' />
                <img className='card-large-close-icon' src={closeIcon} alt='close' />
            </div>

        </div>

    )
}

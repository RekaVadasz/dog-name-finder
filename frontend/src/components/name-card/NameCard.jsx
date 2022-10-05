import React from 'react';
import './NameCard.css';
import questionIcon from '../../assets/circle-question-regular.svg';

export default function NameCard({name}) {
  return (
    <div className='name-card'>
        <div>{name}</div>
        <img src={questionIcon} alt='question mark' />
    </div>
  )
}

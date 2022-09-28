import React from 'react';
import Select from 'react-select';

import './SendName.css';

const options = [
    { value: 'not defined', label: 'Mindegy' },
    { value: 'keverék', label: 'Keverék' },
    { value: 'pumi', label: 'Pumi' },
    { value: 'tacskó', label: 'Tacskó' },
    { value: 'vizsla', label: 'Vizsla' },
    { value: 'border collie', label: 'Border collie' },
    { value: 'törpe pincser', label: 'Törpe pincser' },
    { value: 'mudi', label: 'Mudi' },
    { value: 'törpespicc', label: 'Törpespicc' }
]

export default function SendName() {
return (
    <div className='send-name-container'>
        <form action="">

            <fieldset>
                <label htmlFor='name-of-dog'>Név:</label>
                <input type='text' id='name-of-dog' name='name-of-dog' placeholder='Kutya neve'/>
            </fieldset>

            <fieldset className='gender-radio'>
                <legend>Neme:</legend>

                <input  className='input-hidden' type='radio' id='male' name='gender' value='fiú' />
                <label className='input-label' htmlFor="male">Fiú</label>

                <input className='input-hidden' type='radio' id='female' name='gender' value='lány' />
                <label className='input-label' htmlFor="female">Lány</label>
            </fieldset>

            <fieldset className='size-radio'>
                <legend>Mérete:</legend>

                <input className='input-hidden' type='radio' id='small' name='size' value='kicsi' />
                <label className='input-label' htmlFor="small">Kicsi</label>

                <input className='input-hidden' type='radio' id='medium' name='size' value='közepes'/>
                <label className='input-label' htmlFor="medium">Közepes</label>

                <input className='input-hidden' type='radio' id='large' name='size' value='nagy'/>
                <label className='input-label' htmlFor="large">Nagy</label>
            </fieldset>

            <fieldset className='breed-dropdown'>
                <legend>Fajtája:</legend>
                <label htmlFor="breed">
                    <Select options={options}/>
                </label>
            </fieldset>

            <fieldset className='traits-checkbox'>
                <legend>Egyéb jellemzők (opcionális):</legend>

                <input className='input-hidden' type='checkbox' id='smart' name='smart'/>
                <label className='input-label' htmlFor='smart' >Okos</label>
                
                <input className='input-hidden' type='checkbox' id='playful' name='playful'/>
                <label className='input-label' htmlFor='playful'>Játékos</label>
                
                <input className='input-hidden' type='checkbox' id='fluffy' name='fluffy'/>
                <label className='input-label' htmlFor='fluffy'>Bundás</label>
                
                <input className='input-hidden' type='checkbox' id='shy' name='shy'/>
                <label className='input-label' htmlFor='shy'>Félénk</label>
                
                <input className='input-hidden' type='checkbox' id='active' name='active'/>
                <label className='input-label' htmlFor='active'>Aktív</label>
                
                <input className='input-hidden' type='checkbox' id='hungry' name='hungry'/>
                <label className='input-label' htmlFor='hungry'>Falánk</label>
                
                <input className='input-hidden' type='checkbox' id='barking' name='barking'/>
                <label className='input-label' htmlFor='barking'>Ugatós</label>
                
                <input className='input-hidden' type='checkbox' id='cuddly' name='cuddly'/>
                <label className='input-label' htmlFor='cuddly'>Bújós</label>
                
                <input className='input-hidden' type='checkbox' id='lazy' name='lazy'/>
                <label className='input-label' htmlFor='lazy'>Lusta</label>
            </fieldset>

            <label for='image-upload-input'>Kép feltöltése:</label>
            <input type="file" id='image-upload-input' name='image-upload-input'></input>

            <button>Beküldöm a kutyát!</button>

        </form>
    </div>

)
}

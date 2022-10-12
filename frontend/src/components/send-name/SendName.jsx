import { useState, React } from 'react';
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

    const [inputs, setInputs] = useState({gender: 'fiú', size: 'kicsi', traits: []});
    console.log(inputs)

    // - - - -  input change handler - - - - 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    // - - - -  input change handler - Checkboxes - - - - 

    const handleChangeCheckbox = (event) => {
        const name = event.target.name;
        const newTrait = event.target.value;

        const traits = Array.from(inputs.traits);

        if (event.target.checked) {
            traits.push(newTrait)
            setInputs((values) => ({...values, [name]: traits}))

        } else {
            const newTraits = traits.filter(trait => {return trait !== newTrait})
            console.log(newTraits)
            setInputs((values) => ({...values, [name]: newTraits}))
        }

    }

    const handleChangeFile = (event) => {
        setInputs(values => ({...values, file: event.target.files[0]}))
    }
    
    const handleSubmit = async function(event) {
        event.preventDefault();
        
        await fetch('./addnewdog', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        })
        console.log(inputs)
        console.log("posted")

    }

    return (
        
        <form>

            <fieldset>
                <label htmlFor='name-of-dog'>Név:</label>
                <input 
                    required={true}
                    type='text' 
                    id='name-of-dog' 
                    name='name' 
                    placeholder='Kutya neve'
                    value={inputs.value}
                    onChange={handleChange}
                />
            </fieldset>

            <fieldset className='gender-radio'>
                <legend>Neme:</legend>

                <input 
                    className='input-hidden'
                    type='radio' 
                    id='male' 
                    name='gender' 
                    value='fiú'
                    onChange={handleChange}
                    checked={inputs.gender === 'fiú'}
                />
                <label className='input-label' htmlFor="male">Fiú</label>

                <input 
                    className='input-hidden' 
                    type='radio' 
                    id='female' 
                    name='gender' 
                    value='lány'
                    onChange={handleChange}
                    checked={inputs.gender === 'lány'}
                    />
                <label className='input-label' htmlFor="female">Lány</label>

            </fieldset>

            <fieldset className='size-radio'>
                <legend>Mérete:</legend>

                <input 
                    className='input-hidden' 
                    type='radio' 
                    id='small' 
                    name='size' 
                    value='kicsi'
                    onChange={handleChange}
                    checked={inputs.size === 'kicsi'}
                />
                <label className='input-label' htmlFor="small">Kicsi</label>

                <input 
                    className='input-hidden' 
                    type='radio' 
                    id='medium' 
                    name='size' 
                    value='közepes'
                    onChange={handleChange}
                    checked={inputs.size === 'közepes'}
                />
                <label className='input-label' htmlFor="medium">Közepes</label>

                <input 
                    className='input-hidden' 
                    type='radio' 
                    id='large' 
                    name='size' 
                    value='nagy'
                    onChange={handleChange}
                    checked={inputs.size === 'nagy'}
                />
                <label className='input-label' htmlFor="large">Nagy</label>
            </fieldset>

            <fieldset className='breed-dropdown'>
                <legend>Fajtája:</legend>
                <label htmlFor="breed">
                    <select required={true} name='breed' onChange={handleChange}>
                        <option value='' disabled={true} selected={true}>Válassz egy fajtát!</option>
                        <option value='keverék'>Keverék</option>
                        <option value='pumi'>Pumi</option>
                        <option value='tacskó'>Tacskó</option>
                        <option value='vizsla'>Vizsla</option>
                        <option value='törpe pincser'>Törpe pincser</option>
                        <option value='border collie'>Border collie</option>
                        <option value='mudi'>Mudi</option>
                    </select>
                </label>
            </fieldset>

            <fieldset className='traits-checkbox'>
                <legend>Egyéb jellemzők (opcionális):</legend>

                <input 
                    className='input-hidden' 
                    type='checkbox' 
                    id='smart' 
                    name='traits'
                    value='okos'
                    onChange={handleChangeCheckbox}
                />
                <label className='input-label' htmlFor='smart' >Okos</label>
                
                <input 
                    className='input-hidden' 
                    type='checkbox' 
                    id='playful' 
                    name='traits'
                    value='játékos'
                    onChange={handleChangeCheckbox}
                />
                <label className='input-label' htmlFor='playful'>Játékos</label>
                
                <input 
                    className='input-hidden' 
                    type='checkbox' 
                    id='fluffy' 
                    name='traits'
                    value='bundás'
                    onChange={handleChangeCheckbox}
                    />
                <label className='input-label' htmlFor='fluffy'>Bundás</label>
                
                <input 
                    className='input-hidden' 
                    type='checkbox' 
                    id='shy' 
                    name='traits'
                    value='félénk'
                    onChange={handleChangeCheckbox}
                    />
                <label className='input-label' htmlFor='shy'>Félénk</label>
                
                <input 
                    className='input-hidden' 
                    type='checkbox' 
                    id='active' 
                    name='traits'
                    value='aktív'
                    onChange={handleChangeCheckbox}
                    />
                <label className='input-label' htmlFor='active'>Aktív</label>
                
                <input 
                    className='input-hidden' 
                    type='checkbox' 
                    id='hungry' 
                    name='traits'
                    value='falánk'
                    onChange={handleChangeCheckbox}
                />
                <label className='input-label' htmlFor='hungry'>Falánk</label>
                
                <input 
                    className='input-hidden' 
                    type='checkbox' 
                    id='barking' 
                    name='traits'
                    value='ugatós'
                    onChange={handleChangeCheckbox}
                />
                <label className='input-label' htmlFor='barking'>Ugatós</label>
                
                <input 
                    className='input-hidden' 
                    type='checkbox' 
                    id='cuddly' 
                    name='traits'
                    value='bújós'
                    onChange={handleChangeCheckbox}
                />
                <label className='input-label' htmlFor='cuddly'>Bújós</label>
                
                <input 
                    className='input-hidden' 
                    type='checkbox' 
                    id='lazy' 
                    name='traits'
                    value='lusta'
                    onChange={handleChangeCheckbox}
                />
                <label className='input-label' htmlFor='lazy'>Lusta</label>
            </fieldset>

            <label htmlFor='image-upload-input'>Kép feltöltése:</label>
            <input 
                type='file'
                id='image-upload-input' 
                name='image-upload-input'
                onChange={handleChangeFile}
            />

            <button onClick={handleSubmit}>Beküldöm a kutyát!</button>

        </form>
        

    )
}

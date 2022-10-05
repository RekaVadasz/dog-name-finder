import React, { useEffect, useState} from 'react';
import Select from 'react-select';

import useFetch from '../../hooks/useFetch';

import Dachshund from '../dachshund/Dachshund';
import NameCard from '../name-card/NameCard';
import './Search.css';


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

export default function Search() {

    const [ url, setUrl ] = useState('') 

    const { status, data } = useFetch(url);  
    //console.log(status)
    //console.log(data)

    const [inputs, setInputs] = useState({});
    console.log(inputs)


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    

    const handleSubmit = e => {
        e.preventDefault();
        const gender = inputs.gender;
        const size = inputs.size;
        const url = `./api/search?gender=${gender}&size=${size}&breed=mindegy`
        setUrl(url);
    }
 


    return (
        <section id='search-section'>
            
            <h2>Kutyanév választó</h2>  

            <p>Add meg kutyusod jellemzőit, és megmutatjuk, hogy a felhasználóinktól gyűjtött adatok alapján milyen nevek illenének hozzá a legjobban. </p>
            
            <div className='search-container'>
                
                <div className='search-dog-container'>
                    <Dachshund />
                </div>

                <div className='search-form-container'>
                    <form action="">

                        <fieldset className='gender-radio'>
                            <legend>Neme:</legend>

                            <input 
                                className='input-hidden' 
                                type='radio' 
                                id='male' 
                                name='gender' 
                                value='fiú'
                                onChange={handleChange} 
                            />
                            <label className='input-label' htmlFor="male">Fiú</label>

                            <input 
                                className='input-hidden' 
                                type='radio' 
                                id='female' 
                                name='gender' 
                                value='lány'
                                onChange={handleChange} 
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
                            />
                            <label className='input-label' htmlFor="small">Kicsi</label>

                            <input 
                                className='input-hidden' 
                                type='radio' 
                                id='medium' 
                                name='size' 
                                value='közepes'
                                onChange={handleChange}
                            />
                            <label className='input-label' htmlFor="medium">Közepes</label>

                            <input 
                                className='input-hidden' 
                                type='radio' 
                                id='large' 
                                name='size' 
                                value='nagy'
                                onChange={handleChange}
                            />
                            <label className='input-label' htmlFor="large">Nagy</label>
                        </fieldset>

                        <fieldset className='breed-dropdown'>
                            <legend>Fajtája:</legend>
                            <label htmlFor="breed">
                                <Select 
                                    options={options} 
                                    name='breed'
                                    defaultValue="Mindegy"
                                    onChange={handleChange}
                                />
                            </label>
                        </fieldset>

                        <fieldset>
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
                        </fieldset>

                        <button onClick={handleSubmit}>Keresd!</button>

                    </form>
                </div>

            </div>

            {status === 'fetching' && <div>Loading results, please wait...</div>}

            {status === 'fetched' && 
                <div className='search-results-container'>
                    {data.map((dog) => {
                        return (<NameCard name={dog.name}/>)
                    })}
                </div>}

        </section>
    )
}
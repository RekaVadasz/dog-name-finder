import React, { useEffect, useState} from 'react';
import Select from 'react-select';

import useFetch from '../../hooks/useFetch';

import Dachshund from '../dachshund/Dachshund';
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
    //const [data, setData] = useState({})

    const url = './api/search';

    const { status, data } = useFetch(url);  
    
    //const { dogData, setDogData } = useState([]);

    console.log(status)
    console.log(data)

/*     useEffect(() => {
        console.log("this is inside useEffect");
        if (status === 'fetched') {
            setDogData(data)        
        } 


    }, [status])
 */

    /* if (status === 'idle') return <div>loading</div>
    if (status === 'fetched') return <div>{data[0].name}</div>
 */

 


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

                        <button>Keresd!</button>

                    </form>
                </div>
            </div>
        </section>
    )
}
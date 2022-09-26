import React from 'react';
import Dachshund from '../dachshund/Dachshund';
import './Search.css';

export default function Search() {
  return (
    <section className='search-section'>
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
                        <input  className='gender-input' type='radio' id='male' name='gender' value='fiú' />
                        <label className='gender-label' htmlFor="male">Fiú</label>
                        <input className='gender-input' type='radio' id='female' name='gender' value='lány' />
                        <label className='gender-label' htmlFor="female">Lány</label>
                    </fieldset>

                    <fieldset>
                        <legend>Mérete:</legend>
                        <input type='radio' id='small' name='size' value='kicsi' />
                        <label htmlFor="small">Kicsi</label>
                        <input type='radio' id='medium' name='size' value='közepes'/>
                        <label htmlFor="medium">Közepes</label>
                        <input type='radio' id='large' name='size' value='nagy'/>
                        <label htmlFor="large">Nagy</label>
                    </fieldset>

                    <fieldset>
                        <legend>Fajtája:</legend>
                        <label htmlFor="breed"></label>
                        <select name='breed' id='breed' size='5' multiple>
                            <option value='not defined'>Mindegy</option>
                            <option value='mix'>Keverék</option>
                            <option value='pumi'>Pumi</option>
                            <option value='tacskó'>Tacskó</option>
                            <option value='vizsla'>Vizsla</option>
                            <option value='border collie'>Border collie</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <legend>Egyéb jellemzők (opcionális):</legend>
                        <input type='checkbox' id='smart' name='smart'/>
                        <label htmlFor='smart' >Okos</label>
                        <input type='checkbox' id='playful' name='playful'/>
                        <label htmlFor='playful'>Játékos</label>
                        <input type='checkbox' id='fluffy' name='fluffy'/>
                        <label htmlFor='fluffy'>Bundás</label>
                        <input type='checkbox' id='shy' name='shy'/>
                        <label htmlFor='shy'>Félénk</label>
                        <input type='checkbox' id='active' name='active'/>
                        <label htmlFor='active'>Aktív</label>
                        <input type='checkbox' id='hungry' name='hungry'/>
                        <label htmlFor='hungry'>Falánk</label>
                        <input type='checkbox' id='barking' name='barking'/>
                        <label htmlFor='barking'>Ugatós</label>
                    </fieldset>

                    <button>Keresd!</button>

                </form>
            </div>
        </div>
    </section>
    )
  }
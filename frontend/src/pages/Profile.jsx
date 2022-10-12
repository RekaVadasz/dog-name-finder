import React from 'react';

import Layout from './Layout';
import SendName from '../components/send-name/SendName';
import DogCardSmall from '../components/dog-card-small/DogCardSmall';
import NameCard from '../components/name-card/NameCard';

import useFetch from '../hooks/useFetch';

export default function Profile() {

    const url = './api'
    const { status, data } = useFetch(url);
    //console.log(status)  
    //console.log(data)

    return (
        <Layout>
                <div className='profile-page-container'>
                    <div className='profile-left'>
                        <h2>Kedvenceim</h2>
                        <DogCardSmall />
                    </div>
                    <div className='profile-right'>
                        <div className='profile-form-container'>
                            <h2>Kutyanév beküldése</h2>
                            <SendName />
                        </div>

                        {status === "fetched" &&
                        <div className='profile-sent-names-container'>
                            <h2>Beküldött nevek</h2>
                            {data.map((dog) => {
                                return (<NameCard dog={dog} key={dog.id}/>)
                            })}
                        </div>
                        
                        }


                    </div>
                </div>
            </Layout>
    )
}

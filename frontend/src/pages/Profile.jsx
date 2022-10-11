import React from 'react';

import Layout from './Layout';
import SendName from '../components/send-name/SendName';
import DogCardSmall from '../components/dog-card-small/DogCardSmall';
import NameCard from '../components/name-card/NameCard';
import DogCardLarge from '../components/dog-card-large/DogCardLarge';

export default function Profile() {
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
                        <div className='profile-sent-names-container'>
                            <h2>Beküldött nevek</h2>
                            <NameCard dog={{name: "Róki"}}/>
                        </div>
                    </div>
                </div>
                <DogCardLarge />
        </Layout>
    )
}

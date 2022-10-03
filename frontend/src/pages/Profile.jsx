import React from 'react';

import Layout from './Layout';
import SendName from '../components/send-name/SendName';
import DogCard from '../components/dog-card/DogCard';
import NameCard from '../components/name-card/NameCard';

export default function Profile() {
    return (
        <Layout>
                <div className='profile-page-container'>
                    <div className='profile-left'>
                        <h2>Kedvenceim</h2>
                        <DogCard />
                    </div>
                    <div className='profile-right'>
                        <div className='profile-form-container'>
                            <h2>Kutyanév beküldése</h2>
                            <SendName />
                        </div>
                        <div className='profile-sent-names-container'>
                            <h2>Beküldött nevek</h2>
                            <NameCard />
                            <NameCard />
                            <NameCard />
                            <NameCard />
                        </div>
                    </div>
                </div>
        </Layout>
    )
}

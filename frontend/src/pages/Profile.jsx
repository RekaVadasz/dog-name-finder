import React from 'react';

import Layout from './Layout';
import SendName from '../components/send-name/SendName';
import DogCard from '../components/dog-card/DogCard';
import NameCard from '../components/name-card/NameCard';

export default function Profile() {
    return (
        <Layout>
            <div className='profile-page-container'>
                <SendName />
                <DogCard />
                <NameCard />
                <NameCard />
                <NameCard />
                <NameCard />
            </div>
        </Layout>
    )
}

import React from 'react';

import Layout from './Layout';
import SendName from '../components/send-name/SendName';
import DogCard from '../components/dog-card/DogCard';

export default function Profile() {
    return (
        <Layout>
            <div className='profile-page-container'>
                <SendName />
                <DogCard />
            </div>
        </Layout>
    )
}

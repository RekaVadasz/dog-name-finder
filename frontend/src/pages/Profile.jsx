import React from 'react';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { HashLink } from 'react-router-hash-link';

import Layout from './Layout';
import SendName from '../components/send-name/SendName';
import DogCard from '../components/dog-card/DogCard';

export default function Profile() {
    return (
        <Layout>
            <div>Profile page
                <NavLink to='/home#random-name-section'>Névválasztó</NavLink><br />


                <HashLink smooth to='/home#random-name-section'>Link to Hash Fragment</HashLink><br />

                <HashLink to="/some/path#with-hash-fragment">Link to Hash Fragment orig</HashLink><br />
                <div>blabla</div>
            </div>
            <SendName />
            <DogCard />
        </Layout>
    )
}

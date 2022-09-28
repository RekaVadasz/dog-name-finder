import React from 'react';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

import Layout from './Layout';
import SendName from '../components/send-name/SendName';

export default function Profile() {
    return (
        <Layout>
            <div>Profile page
                <NavLink to='/home/#search-section'>Névválasztó</NavLink>
                <AnchorLink href='/home/#random-name-section'>Random</AnchorLink>
            </div>
            <SendName />
        </Layout>
    )
}

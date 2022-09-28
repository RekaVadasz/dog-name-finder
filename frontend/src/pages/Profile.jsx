import React from 'react';
import Layout from './Layout';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';


export default function Profile() {
    return (
        <Layout>
            <div>Profile page
                <NavLink to='/home/#search-section'>Névválasztó</NavLink>
                <AnchorLink href='/home/#random-name-section'>Random</AnchorLink>
            </div>
        </Layout>
    )
}

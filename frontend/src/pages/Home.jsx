import React from 'react';

import Layout from './Layout';
import Hero from '../components/hero/Hero';
import WalkingPaw from '../components/walking-paw/WalkingPaw';
import Search from '../components/search/Search';
import RandomName from '../components/random-name/RandomName';
import Registration from '../components/registration/Registration';


export default function Home() {
  return (
        <Layout>
            <Hero />
            <WalkingPaw />
            <Search />
            <RandomName />
            <Registration />
        </Layout>
    )
}

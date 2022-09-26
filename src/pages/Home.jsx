import React from 'react';

import Layout from './Layout';
import Hero from '../components/hero/Hero';
import WalkingPaw from '../components/walking-paw/WalkingPaw';
import Search from '../components/search/Search';
import RandomName from '../components/random-name/RandomName';


export default function Home() {
  return (
        <Layout>
            <Hero />
            <WalkingPaw />
            <Search />
            <RandomName />
        </Layout>
    )
}

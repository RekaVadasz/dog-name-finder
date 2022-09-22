import React from 'react';

import Layout from './Layout';
import Hero from '../components/hero/Hero';
import Search from '../components/search/Search';

export default function Home() {
  return (
        <Layout>
            <Hero />
            <Search />
        </Layout>
    )
}

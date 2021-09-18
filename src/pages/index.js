import React from 'react'
import '../style/index.css'

import Layout from '../components/Layout'
import AboutCard from '../components/AboutCard'
import SocialCard from '../components/SocialCard'
import Quote from '../components/Quote'
import NewsCard from '../components/NewsCard'

const IndexPage = () => {
  return (
    < >
      <Layout pageTitle="Home">
          <Quote />
          <AboutCard />
          <SocialCard />
          <NewsCard />
      </Layout>
    </>
  );
}

export default IndexPage

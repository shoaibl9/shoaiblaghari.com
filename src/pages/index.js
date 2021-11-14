import React from 'react'
import '../style/index.css'

import Layout from '../components/Layout'
import AboutCard from '../components/AboutCard'
import SocialCard from '../components/SocialCard'
import NewsCard from '../components/NewsCard'

const IndexPage = () => {
  return (
    < >
      <Layout pageTitle="Home">
          <AboutCard />
          <SocialCard />
          <NewsCard />
      </Layout>
    </>
  );
}

export default IndexPage

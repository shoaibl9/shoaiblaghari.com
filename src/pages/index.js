import React from 'react'
import '../style/index.css'

import Layout from '../components/Layout'
import AboutCard from '../components/AboutCard'
import SocialCard from '../components/SocialCard'

const IndexPage = () => {
  return (
    < >
      <Layout pageTitle="Home">
          <AboutCard />
          <SocialCard />
      </Layout>
    </>
  );
}

export default IndexPage

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import NavBar from '../components/NavBar'
import AboutCard from '../components/AboutCard'
import SocialCard from '../components/SocialCard'
import Footer from '../components/Footer'
import Background from '../components/Background'

const IndexPage = () => {
  return (
    < >
      <head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="Shoaib, Laghari" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="favicon.ico" />
        <title>Shoaib Laghari</title>
      </head>

      <body>
        <Background />
          <NavBar />
          <AboutCard />
          <SocialCard />
      </body>
    </>
  )
}

export default IndexPage

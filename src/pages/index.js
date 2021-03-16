import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import NavBar from '../components/NavBar'
import AboutCard from '../components/AboutCard'
import SocialCard from '../components/SocialCard'
import Footer from '../components/Footer'

const Background = styled(Container)`
  min-height: 94vh;
  min-width: 100%;
  background-image: linear-gradient(black, rgba(204, 68, 74, 1));
`

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
        <Background>
          <NavBar />
          <AboutCard />
          <SocialCard />
        </Background>
        <Footer className="text-center">Shoaib Laghari © 2021</Footer>
      </body>
    </>
  )
}

export default IndexPage

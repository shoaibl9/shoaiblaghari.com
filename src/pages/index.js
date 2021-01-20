import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import NavBar from '../components/NavBar'
import AboutCard from '../components/AboutCard'
import SocialCard from '../components/SocialCard'

const StyledContainer = styled(Container)`
  min-height: 94vh;
  min-width: 100%;
  background-image: linear-gradient(black, rgba(204, 68, 74, 1));
`

const StyledFooter = styled.footer`
  font-size: small;
  color: white;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  background: rgba(204, 68, 74, 1);
`

const IndexPage = () => {
  return (
    < >
      <head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="Shoaib, Laghari" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shoaib Laghari</title>
      </head>

      <body>
        <StyledContainer>
          <NavBar />
          <AboutCard />
          <SocialCard />
        </StyledContainer>
        <StyledFooter className="text-center">Shoaib Laghari © 2021</StyledFooter>
      </body>
    </>
  )
}

export default IndexPage

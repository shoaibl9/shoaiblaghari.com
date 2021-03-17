import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Background from '../components/Background'

export default () => {
  return (
    < >
      <head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="Shoaib, Laghari" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*<link rel="icon" href="/images/favicon-1.png" />*/}
        <title>Shoaib Laghari</title>
      </head>

      <body>
        <Background />
          <NavBar />
          <p className="text-white text-center">Coming soon...</p>
      </body>
    </>
  )
}

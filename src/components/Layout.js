import React from 'react'
import Helmet from 'react-helmet'

import Background from '../components/Background'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Layout = ({ pageTitle, children }) => (
  <>
    <Helmet>
      <title>{`Shoaib Laghari | ${pageTitle}`}</title>
      <html lang="en" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Shoaib Laghari" />
      <link rel="icon" type="image/png" href="favicon.ico" />
    </Helmet>
    <div>
      <header>
        <Background />
        <NavBar />
      </header>
      {children}
      <Footer />
    </div>
  </>
)

export default Layout;

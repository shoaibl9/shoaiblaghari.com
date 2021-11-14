// currently unused

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/blog.css'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'

const StyledContainer = styled(Container)`
&{
  margin-top: 30vh;
  text-align: center;
  transform: translateY(-50%);
}
`

const StyledIcon = styled(FontAwesomeIcon)`
&{
  font-size: 2em;
  margin-top: 40%;
}
`

const BlogPage = () => {
  return (
    < >
      <Layout pageTitle="Blog">
        <StyledContainer>
          <a href="https://www.shoaiblaghari.me" target='_blank' rel="noopener noreferrer" className="special">
            <StyledIcon icon={faWordpress}/>
          </a>
        </StyledContainer>
      </Layout>
    </>
  )
}

export default BlogPage;

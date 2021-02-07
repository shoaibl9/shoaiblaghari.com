import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const StyledContainer = styled(Container)`
  position: fixed;
  min-height: 94vh;
  min-width: 100%;
  z-index: 0;
  background-image: linear-gradient(black, rgba(204, 68, 74, 1));
`

const Background = () => {
  return (
    < >
      <StyledContainer/>
    </>
  )
}

export default Background

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  font-size: small;
  color: white;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  background: rgba(204, 68, 74, 1);
`

const Footer = () => {
  return (
    < >
      <StyledFooter className="text-center">Shoaib Laghari © 2021</StyledFooter>
    </>
  )
}

export default Footer

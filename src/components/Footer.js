import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: small;
  color: white;
  padding-bottom: .5rem;
  padding-top: 1rem;
  text-align: center;
`

const Footer = () => {
  return (
    < >
      <StyledFooter>{`Shoaib Laghari © ${new Date().getFullYear()}`}</StyledFooter>
    </>
  )
}

export default Footer

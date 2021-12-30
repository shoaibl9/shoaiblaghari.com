import React from 'react'
import {Link} from 'gatsby'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../assets/images/huskycolored.jpg'

import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background: #1a1d20
`

const StyledNavLink = styled(Link)`
  font-weight: bold;
`

function NavBar(){
  return(
    <StyledNavbar expand="lg" variant='dark' className="sticky-top shadow text-white mb-md-4 mb-sm-3 ml-lg-4 mr-lg-4"  >
      <Navbar.Brand className='d-flex flex-row p-0'>
        <Link to="/">
        <img
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top rounded-circle"
            alt="husky logo"

        />
        </Link>
        <strong className='d-flex align-items-center m-0 pl-2 pt-0 pr-0' >shoaiblaghari.</strong>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link to="/code" as={StyledNavLink} className='pl-0'>Code</Nav.Link>
        <Nav.Link to="/writing" as={StyledNavLink}>Writing</Nav.Link>
        <Nav.Link to="/blog" as={StyledNavLink}>Blog</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link to="/contact" as={StyledNavLink}>Contact</Nav.Link>
        <Nav.Link to="/about" as={StyledNavLink}>About</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  )
}

export default NavBar;

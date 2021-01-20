import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { Container, Col, Row, Card, Button } from 'react-bootstrap'

const StyledButton = styled(Button)`
 &{
  padding:1rem 2rem;
  border:none;
  font-weight: bold;
  width:250px;
 }
 &.disabled{
   color:white;
   background: gray;
 }
 &:focus{
   background:white;
   color:black;

 }
`

const BtnGithub = styled(StyledButton)`
&{
  color:white;
  background:#211F1F;
}
&:hover {
  background: #444444;
}
`

const BtnLinkedin = styled(StyledButton)`
&{
  color:white;
  background:#0e76a8;
}
&:hover{
  background:#0a597e;
}
`

const BtnInstagram = styled(StyledButton)`
&{
  color:white;
  background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
}
&:hover{
  background: -moz-linear-gradient(70deg, #f09433 0%, #e6683c 15%, #dc2743 30%, #cc2366 55%, #bc1888 100%);
  background: -webkit-linear-gradient(70deg, #f09433 0%,#e6683c 15%,#dc2743 30%,#cc2366 55%,#bc1888 100%);
  background: linear-gradient(70deg, #f09433 0%,#e6683c 15%,#dc2743 30%,#cc2366 55%,#bc1888 100%);
}
&.disabled{
  color:white;
  background: #f09433;
  background: -moz-linear-gradient(45deg,#f6bc80 0%, #efa185 25%, #e9788a 50%, #df769f 75%, #d56fb5 100%);
  background: -webkit-linear-gradient(45deg,#f6bc80 0%, #efa185 25%, #e9788a 50%, #df769f 75%, #d56fb5 100%);
  background: linear-gradient(45deg,#f6bc80 0%, #efa185 25%, #e9788a 50%, #df769f 75%, #d56fb5 100%);
}
`

function AboutCard() {
  return(
    <Container>
      <Row>
        <Col xs="12" md="12">
          <Card className="mt-3 mb-2">
            <Card.Header className="text-center">Follow me on Social Media!</Card.Header>
            <Card.Body className="mx-auto">
            <BtnInstagram block href='https://www.instagram.com/shoaib9_' target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram}/> Instagram
            </BtnInstagram>
            <BtnLinkedin block href='https://www.linkedin.com/in/shoaiblaghari' target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin}/> Linkedin
            </BtnLinkedin>
            <BtnGithub  block href='https://www.github.com/shoaibl9' target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub}/> Github
            </BtnGithub>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutCard;

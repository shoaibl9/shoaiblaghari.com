import React from 'react'
import me from '../images/profilePic.jpg'

import { Container, Col, Row, Card, Image} from 'react-bootstrap'

function AboutCard() {
  return(
    <Container>
      <Row>
        <Col lg="3" md="4">
          <Image src={me} thumbnail className="mt-3"/>
          <p className="text-center text-white mt-1">Hey look, it's me!</p>
        </Col>
        <Col lg="9" md="8">
        <Card className="mt-3">
          <Card.Body>
            <Card.Text>
            <h3><strong>Shoaib</strong> Laghari, <small> UW 2024</small></h3>
            <p>Hello! Thanks for taking some time to look at my personal website!
            I kind of just keep my random projects and writing stuff here. Feel free to show yourself around :)</p>
            <p>A little bit about me:</p>
            <ul>
              <li>I'm a student at the <strong>University of Washington</strong> studying Economics (and maybe Data Science or International Studies).</li>
              <li>In my free time, I like to play soccer, watch movies, check out parks, talk with friends. You know. The usual.</li>
              <li>My socials are listed below, so follow me there and we can chat!</li>
            </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>P.S.- I'll try to get the basic site finished by Summer. Probably doing homework right now.</Card.Footer>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutCard;

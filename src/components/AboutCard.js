import React from 'react'
import me from '../assets/images/profilePic.jpg'

import { Container, Col, Row, Card, Image } from 'react-bootstrap'

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
              <li>I was born in <strong>Karachi</strong>, Pakistan, raised in <strong>Nashville</strong>, Tennessee, and am currently studying in Seattle, Washington.</li>
              <li>I hope to graduate from the <strong>University of Washington</strong> with a Bachelor of Science (Honors) degree in Economics and minor in Data Science.</li>
              <li>My main academic interests are: development economics, immigration, sustainability, data science, international trade, cities, and more.</li>
              <li>In my free time, I like to play soccer, watch movies, read, exercise, play video games (on PS4), and hang out with friends.</li>
            </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutCard;
